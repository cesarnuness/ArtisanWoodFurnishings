import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { PrismaService } from 'src/prisma.service';
import { UpdatePutProductDto } from './dto/update-put-product.dto';
import { UpdatePatchProductDto } from './dto/update-patch-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateProductDto) {
    return this.prisma.product.create({ data });
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  update(id: number, data: UpdatePatchProductDto) {
    return this.prisma.product.update({
      data,
      where: { id },
    });
  }

  put(id: number, data: UpdatePutProductDto) {
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

  remove(id: number) {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}
