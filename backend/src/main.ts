import { NestFactory } from '@nestjs/core';
import { ecommerceModule } from './ecommerce.module';  
import { Sequelize } from 'sequelize-typescript';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ecommerceModule);  

  app.enableCors({
    origin: 'http://localhost:3000',  
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,  
    whitelist: true,
    forbidNonWhitelisted: true,
  });

  const sequelize = app.get(Sequelize);
  app.useGlobalPipes(new ValidationPipe());
  await sequelize.sync({ alter: true });

  await app.listen(3001);
}

bootstrap();
