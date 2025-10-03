import { Controller, Get } from '@nestjs/common';

@Controller('ping')
export class PruebaController {
  @Get()
  getHello(): string {
    return 'Este es un endpoint de pruebas';
  }
}