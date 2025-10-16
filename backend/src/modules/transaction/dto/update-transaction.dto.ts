import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTransactionDto {
  @ApiProperty({ example: 'completed', required: false })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiProperty({ example: 'abc123...', required: false })
  @IsOptional()
  @IsString()
  stellarTransactionHash?: string;
}
