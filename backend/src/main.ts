import { NestFactory } from '@nestjs/core';
import { ecommerceModule } from './ecommerce.module';

async function bootstrap() {
  const app = await NestFactory.create(ecommerceModule);
  await app.listen(3001);
}
bootstrap();
