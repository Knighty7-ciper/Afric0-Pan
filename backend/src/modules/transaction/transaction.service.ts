import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransactionEntity } from './entities/transaction.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionResponseDto } from './dto/transaction-response.dto';
import { WalletEntity } from '../wallet/entities/wallet.entity';
import { UserEntity } from '../user/entities/user.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(TransactionEntity)
    private transactionRepository: Repository<TransactionEntity>,
    @InjectRepository(WalletEntity)
    private walletRepository: Repository<WalletEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async create(
    userId: string,
    createTransactionDto: CreateTransactionDto,
  ): Promise<TransactionResponseDto> {
    const { type, fromCurrency, toCurrency, fromAmount, toAmount, walletId, description } =
      createTransactionDto;

    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (walletId) {
      const wallet = await this.walletRepository.findOne({ where: { id: walletId } });
      if (!wallet) {
        throw new NotFoundException('Wallet not found');
      }
      if (wallet.balance < fromAmount) {
        throw new BadRequestException('Insufficient balance');
      }
    }

    const transaction = this.transactionRepository.create({
      id: uuidv4(),
      userId,
      walletId,
      type,
      fromCurrency,
      toCurrency,
      fromAmount,
      toAmount,
      description,
      status: 'pending',
      referenceNumber: `TXN-${Date.now()}`,
    });

    const savedTransaction = await this.transactionRepository.save(transaction);
    return this.toResponseDto(savedTransaction);
  }

  async findByUser(userId: string, page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;
    const [transactions, total] = await this.transactionRepository.findAndCount({
      where: { userId },
      skip,
      take: limit,
      order: { createdAt: 'DESC' },
    });

    return {
      data: transactions.map((tx) => this.toResponseDto(tx)),
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findOne(transactionId: string): Promise<TransactionResponseDto> {
    const transaction = await this.transactionRepository.findOne({
      where: { id: transactionId },
    });
    if (!transaction) {
      throw new NotFoundException('Transaction not found');
    }
    return this.toResponseDto(transaction);
  }

  async update(
    transactionId: string,
    updateTransactionDto: UpdateTransactionDto,
  ): Promise<TransactionResponseDto> {
    const transaction = await this.transactionRepository.findOne({
      where: { id: transactionId },
    });
    if (!transaction) {
      throw new NotFoundException('Transaction not found');
    }

    Object.assign(transaction, updateTransactionDto);
    if (updateTransactionDto.status === 'completed') {
      transaction.completedAt = new Date();
    }

    const updatedTransaction = await this.transactionRepository.save(transaction);
    return this.toResponseDto(updatedTransaction);
  }

  async getHistory(userId: string, page: number = 1, limit: number = 10) {
    return this.findByUser(userId, page, limit);
  }

  async getStatus(transactionId: string) {
    const transaction = await this.transactionRepository.findOne({
      where: { id: transactionId },
    });
    if (!transaction) {
      throw new NotFoundException('Transaction not found');
    }
    return {
      id: transaction.id,
      status: transaction.status,
      updatedAt: transaction.updatedAt,
      completedAt: transaction.completedAt,
    };
  }

  private toResponseDto(transaction: TransactionEntity): TransactionResponseDto {
    return {
      id: transaction.id,
      userId: transaction.userId,
      walletId: transaction.walletId,
      type: transaction.type,
      fromCurrency: transaction.fromCurrency,
      toCurrency: transaction.toCurrency,
      fromAmount: transaction.fromAmount,
      toAmount: transaction.toAmount,
      fee: transaction.fee,
      status: transaction.status,
      description: transaction.description,
      referenceNumber: transaction.referenceNumber,
      stellarTransactionHash: transaction.stellarTransactionHash,
      completedAt: transaction.completedAt,
      createdAt: transaction.createdAt,
      updatedAt: transaction.updatedAt,
    };
  }
}
