import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
  HttpCode,
  HttpStatus,
  Query,
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { LoginAdminDto } from './dto/login-admin.dto';
import { AdminResponseDto } from './dto/admin-response.dto';
import { JwtAuthGuard } from '../../shared/guards/auth.guard';
import { AdminGuard } from '../../shared/guards/admin.guard';

@ApiTags('admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Admin login' })
  @ApiResponse({ status: 200, description: 'Login successful' })
  async login(@Body() loginAdminDto: LoginAdminDto) {
    return this.adminService.login(loginAdminDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard, AdminGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all admins (Super admin only)' })
  @ApiResponse({ status: 200, description: 'Admins retrieved' })
  async findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.adminService.findAll(page, limit);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, AdminGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get admin by ID' })
  @ApiResponse({ status: 200, description: 'Admin found', type: AdminResponseDto })
  async findOne(@Param('id') id: string): Promise<AdminResponseDto> {
    return this.adminService.findOne(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard, AdminGuard)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create admin (Super admin only)' })
  @ApiResponse({ status: 201, description: 'Admin created', type: AdminResponseDto })
  async create(@Body() createAdminDto: CreateAdminDto): Promise<AdminResponseDto> {
    return this.adminService.create(createAdminDto);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, AdminGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update admin (Super admin only)' })
  @ApiResponse({ status: 200, description: 'Admin updated', type: AdminResponseDto })
  async update(
    @Param('id') id: string,
    @Body() updateAdminDto: UpdateAdminDto,
  ): Promise<AdminResponseDto> {
    return this.adminService.update(id, updateAdminDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, AdminGuard)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete admin (Super admin only)' })
  async remove(@Param('id') id: string): Promise<void> {
    return this.adminService.remove(id);
  }

  @Put(':id/deactivate')
  @UseGuards(JwtAuthGuard, AdminGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Deactivate admin' })
  @ApiResponse({ status: 200, description: 'Admin deactivated', type: AdminResponseDto })
  async deactivate(@Param('id') id: string): Promise<AdminResponseDto> {
    return this.adminService.deactivate(id);
  }
}
