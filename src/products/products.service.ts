import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Product as ProductModel } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.product.findMany();
  }

  async getById(id: string) {
    return await this.prisma.product.findUnique({
      where: { id },
    });
  }

  async create(productDto: ProductModel) {
    const { title, price } = productDto;
    return await this.prisma.product.create({
      data: { title, price },
    });
  }

  async deleteById(id: string) {
    return await this.prisma.product.delete({ where: { id } });
  }

  async updateById(id: string, productDto: ProductModel) {
    const { title, price } = productDto;
    return await this.prisma.product.update({
      where: { id },
      data: { title, price },
    });
  }
}
