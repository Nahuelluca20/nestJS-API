import { Controller, Get, Param } from '@nestjs/common';
import { CategoriesService } from '@/services';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get('/:id/products/:productId')
  getCategories(
    @Param('id') id: string,
    @Param('productId') productId: string,
  ): object {
    return this.categoriesService.getCategories(id, productId);
  }
}
