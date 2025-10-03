import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { PruebaController } from './prueba/prueba.controller';

@Module({
  imports: [ProductModule],
  controllers: [PruebaController],
})
export class AppModule {}