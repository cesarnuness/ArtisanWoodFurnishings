import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { PrismaService } from 'src/prisma.service';
import { UpdatePutProductDto } from './dto/update-put-product.dto';
import { UpdatePatchProductDto } from './dto/update-patch-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateProductDto) {
    const convertedData = {
      ...data,
      price: parseFloat(data.price), // Convert price to float
      published: data.published === true, // Convert published to boolean
      quantity: parseInt(data.quantity, 10), // Convert quantity to integer
    };

    return this.prisma.product.create({ data: convertedData });
  }

  async findAll() {
    return this.prisma.product.findMany();
  }

  async findOne(id: number) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdatePatchProductDto) {
    return this.prisma.product.update({
      data,
      where: { id },
    });
  }

  async put(id: number, data: UpdatePutProductDto) {
    for (const key in data) {
      if (data[key] === undefined) {
        data[key] = '';
      }
    }
    return this.prisma.product.update({
      data,
      where: { id },
    });
  }

  async remove(id: number) {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}
