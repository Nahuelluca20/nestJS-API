import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { CategoriesService } from './services/categories/categories.service';
import { ProductsService } from './services/products/products.service';
import { UsersController } from './controllers/users/users.controller';
import { OrdersController } from './controllers/orders/orders.controller';
import { CustomersController } from './controllers/customers/customers.controller';
import { BrandsController } from './controllers/brands/brands.controller';
import { BrandsService } from './services/brands/brands.service';
import { UsersService } from './services/users/users.service';
import { OrdersService } from './services/orders/orders.service';
import { CustomersService } from './services/customers/customers.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    UsersController,
    OrdersController,
    CustomersController,
    BrandsController,
  ],
  providers: [
    AppService,
    CategoriesService,
    ProductsService,
    BrandsService,
    UsersService,
    OrdersService,
    CustomersService,
  ],
})
export class AppModule {}
