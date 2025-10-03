import { Product } from './entities/product.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductService {
  private products: Product[] = [];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: string): Product {
    const product = this.products.find(p => p.id === id);
    if (!product) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }
    return product;
  }

  create(createProductDto: CreateProductDto): Product {
    const newProduct: Product = {
      id: uuidv4(),
      ...createProductDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: string, updateProductDto: UpdateProductDto): Product {
    const productIndex = this.products.findIndex(p => p.id === id);
    if (productIndex === -1) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }
    
    const updatedProduct = {
      ...this.products[productIndex],
      ...updateProductDto,
      updatedAt: new Date(),
    };
    
    this.products[productIndex] = updatedProduct;
    return updatedProduct;
  }

  remove(id: string): void {
    const productIndex = this.products.findIndex(p => p.id === id);
    if (productIndex === -1) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }
    this.products.splice(productIndex, 1);
  }
}