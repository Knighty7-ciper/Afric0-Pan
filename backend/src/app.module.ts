import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeormConfig } from './config/typeorm.config';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { WalletModule } from './modules/wallet/wallet.module';
import { TransactionModule } from './modules/transaction/transaction.module';
import { CurrencyModule } from './modules/currency/currency.module';
import { CountryModule } from './modules/country/country.module';
import { ExchangeRateModule } from './modules/exchange-rate/exchange-rate.module';
import { NewsModule } from './modules/news/news.module';
import { EconomicIndicatorModule } from './modules/economic-indicator/economic-indicator.module';
import { AdminModule } from './modules/admin/admin.module';
import { RoleModule } from './modules/role/role.module';
import { NewsCategoryModule } from './modules/news-category/news-category.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../.env',
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: typeormConfig,
    }),
    AuthModule,
    UserModule,
    WalletModule,
    TransactionModule,
    CurrencyModule,
    CountryModule,
    ExchangeRateModule,
    NewsModule,
    EconomicIndicatorModule,
    AdminModule,
    RoleModule,
    NewsCategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
