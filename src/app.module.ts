import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BusinessPartnerController } from './business-partner/business-partner.controller';
import { BusinessPartnerService } from './business-partner/business-partner.service';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, BusinessPartnerController, ProductController],
  providers: [AppService, BusinessPartnerService, ProductService],
})
export class AppModule {}
