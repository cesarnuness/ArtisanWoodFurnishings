import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { ElasticSearchModule } from './elastic-search/elastic-search.module';
import { PaymentModule } from './payment/payment.module';
import { AwsDeploymentModule } from './aws-deployment/aws-deployment.module';
import { ProductsModule } from './products/products.module';
import TestController from './test/test.controller';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    AuthModule,
    CartModule,
    OrderModule,
    ElasticSearchModule,
    PaymentModule,
    AwsDeploymentModule,
    ProductsModule,
    CategoriesModule,
  ],
  controllers: [AppController, TestController],
  providers: [AppService],
})
export class AppModule {}
