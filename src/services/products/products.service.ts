import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '@/entities';
import { CreateProduct, UpdateProduct } from '@/dtos';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'golis',
      description: 'nada',
      price: 122,
      stock: 122,
      image: 'sadasdas',
    },
  ];
  getOne(productId: string): object {
    return {
      message: `product: ${productId}`,
    };
  }
  getProducts(limit: number, offset: number, brand: string): object {
    return {
      message: `limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    };
  }

  getProductFilter(): object {
    return {
      message: `soy un filtro`,
    };
  }

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product {
    const products = this.products.find((item) => item.id === id);
    if (!products) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return products;
  }

  create(payload: CreateProduct): Product {
    console.log(payload);
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProduct): object {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = { ...product, ...payload };

      return this.products[index];
    }
    return null;
  }

  delete(id: number): boolean {
    const index = this.products.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.products.splice(index, 1);
    return true;
  }
}
