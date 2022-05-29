import { ProductsService } from './products.service';
import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';

import { Product as ProductModel } from '@prisma/client';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getAll(): Promise<ProductModel[]> {
    return await this.productsService.getAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getOne(@Param('id') id: string): Promise<ProductModel> {
    return await this.productsService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() CreateProduct: ProductModel): Promise<ProductModel> {
    return await this.productsService.create(CreateProduct);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async delete(@Param('id') id: string): Promise<ProductModel> {
    return await this.productsService.deleteById(id);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(
    @Body() Updateproduct: ProductModel,
    @Param('id') id: string,
  ): Promise<ProductModel> {
    return await this.productsService.updateById(id, Updateproduct);
  }
}
