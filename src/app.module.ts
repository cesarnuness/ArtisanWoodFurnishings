import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { ElasticSearchModule } from './elastic-search/elastic-search.module';
import { PaymentModule } from './payment/payment.module';
import { AwsDeploymentModule } from './aws-deployment/aws-deployment.module';

@Module({
  imports: [AuthModule, CategoryModule, ProductModule, CartModule, OrderModule, ElasticSearchModule, PaymentModule, AwsDeploymentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
