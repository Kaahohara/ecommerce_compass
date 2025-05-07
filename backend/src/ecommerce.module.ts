import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './Products/Products.model'; 
import { ProductsModule } from './Products/Products.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.HOST,
      port: process.env.PORT ? Number(process.env.PORT) : 5432,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      models: [Product],
      autoLoadModels: true,
    }),
    ProductsModule,
  ],
})
export class ecommerceModule {}