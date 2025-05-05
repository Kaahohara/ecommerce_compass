import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './src/Products/Products.model'; 
import { ProductsModule } from './src/Products/Products.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.HOST,
      port: process.env.PORT,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABSE,
      models: [Product],
      autoLoadModels: true,
      synchronize: true, 
    }),
    ProductsModule,
  ],
})
export class ecommerceModule {}