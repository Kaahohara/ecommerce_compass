import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './Products/Products.model'; 
import { ProductsModule } from './Products/Products.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      models: [Product],
      
      autoLoadModels: true,
    }),
    ProductsModule,
    SubscriptionsModule,
  ],
})
export class ecommerceModule {}

