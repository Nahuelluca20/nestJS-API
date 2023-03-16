import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
  getCategories(id: string, productId: string): object {
    return {
      message: `product: ${productId} and ID: ${id}`,
    };
  }
}
