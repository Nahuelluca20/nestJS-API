import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from '@/services';
import { CreateProduct, UpdateProduct } from '@/dtos';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get('')
  getProducts(): // @Query('limit') limit = 100,
  // @Query('offset') offset = 0,
  // @Query('brand') brand: string,
  object {
    // const { limit, offset } = params;
    return this.productService.findAll();
  }

  @Get('/filter')
  getProductFilter(): object {
    return this.productService.getProductFilter();
  }

  @Get('/:productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId', ParseIntPipe) productId: number): object {
    return this.productService.findOne(productId);
  }

  @Post()
  create(@Body() payload: CreateProduct): object {
    return this.productService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateProduct): object {
    return this.productService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number): boolean {
    return this.productService.delete(+id);
  }
}
