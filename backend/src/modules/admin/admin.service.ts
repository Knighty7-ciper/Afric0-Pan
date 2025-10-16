import {
  Injectable,
  NotFoundException,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { AdminEntity } from './entities/admin.entity';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { LoginAdminDto } from './dto/login-admin.dto';
import { AdminResponseDto } from './dto/admin-response.dto';
import { CryptoUtil } from '../../shared/utils/crypto.util';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(AdminEntity)
    private adminRepository: Repository<AdminEntity>,
    private jwtService: JwtService,
  ) {}

  async create(createAdminDto: CreateAdminDto): Promise<AdminResponseDto> {
    const { email, password, firstName, lastName, adminLevel, permissions } =
      createAdminDto;

    const existing = await this.adminRepository.findOne({ where: { email } });
    if (existing) {
      throw new BadRequestException('Admin email already exists');
    }

    const hashedPassword = await CryptoUtil.hashPassword(password);

    const admin = this.adminRepository.create({
      id: uuidv4(),
      email,
      password: hashedPassword,
      firstName,
      lastName,
      adminLevel: adminLevel || 'admin',
      permissions: permissions || [],
      isActive: true,
      role: 'admin',
    });

    const saved = await this.adminRepository.save(admin);
    return this.toResponseDto(saved);
  }

  async login(loginAdminDto: LoginAdminDto) {
    const { email, password } = loginAdminDto;

    const admin = await this.adminRepository.findOne({ where: { email } });
    if (!admin) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordValid = await CryptoUtil.comparePasswords(password, admin.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    if (!admin.isActive) {
      throw new UnauthorizedException('Admin account is disabled');
    }

    admin.lastLoginAt = new Date();
    await this.adminRepository.save(admin);

    const token = this.jwtService.sign({
      sub: admin.id,
      email: admin.email,
      role: admin.role,
      adminLevel: admin.adminLevel,
    });

    return {
      accessToken: token,
      admin: this.toResponseDto(admin),
    };
  }

  async findAll(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;
    const [admins, total] = await this.adminRepository.findAndCount({
      skip,
      take: limit,
      order: { createdAt: 'DESC' },
    });

    return {
      data: admins.map((a) => this.toResponseDto(a)),
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findOne(id: string): Promise<AdminResponseDto> {
    const admin = await this.adminRepository.findOne({ where: { id } });
    if (!admin) {
      throw new NotFoundException('Admin not found');
    }
    return this.toResponseDto(admin);
  }

  async update(id: string, updateAdminDto: UpdateAdminDto): Promise<AdminResponseDto> {
    const admin = await this.adminRepository.findOne({ where: { id } });
    if (!admin) {
      throw new NotFoundException('Admin not found');
    }

    if (updateAdminDto.password) {
      updateAdminDto.password = await CryptoUtil.hashPassword(updateAdminDto.password);
    }

    Object.assign(admin, updateAdminDto);
    const updated = await this.adminRepository.save(admin);
    return this.toResponseDto(updated);
  }

  async remove(id: string): Promise<void> {
    const admin = await this.adminRepository.findOne({ where: { id } });
    if (!admin) {
      throw new NotFoundException('Admin not found');
    }
    await this.adminRepository.remove(admin);
  }

  async deactivate(id: string): Promise<AdminResponseDto> {
    const admin = await this.adminRepository.findOne({ where: { id } });
    if (!admin) {
      throw new NotFoundException('Admin not found');
    }
    admin.isActive = false;
    const updated = await this.adminRepository.save(admin);
    return this.toResponseDto(updated);
  }

  private toResponseDto(admin: AdminEntity): AdminResponseDto {
    return {
      id: admin.id,
      email: admin.email,
      firstName: admin.firstName,
      lastName: admin.lastName,
      role: admin.role,
      adminLevel: admin.adminLevel,
      isActive: admin.isActive,
      permissions: admin.permissions,
      lastLoginAt: admin.lastLoginAt,
      createdAt: admin.createdAt,
      updatedAt: admin.updatedAt,
    };
  }
}
