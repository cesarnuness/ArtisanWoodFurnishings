import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdatePatchCategoryDto } from './dto/update-patch-category.dto';
import { UpdatePutCategoryDto } from './dto/update-put-category.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateCategoryDto) {
    return this.prisma.category.create({ data });
  }

  async findAll() {
    return this.prisma.category.findMany();
  }

  async findOne(id: number) {
    return this.prisma.category.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdatePatchCategoryDto) {
    return this.prisma.category.update({
      data,
      where: { id },
    });
  }

  async put(id: number, data: UpdatePutCategoryDto) {
    for (const key in data) {
      if (data[key] === undefined) {
        data[key] = '';
      }
    }
    return this.prisma.category.update({
      data,
      where: { id },
    });
  }

  async remove(id: number) {
    return this.prisma.category.delete({
      where: { id },
    });
  }
}
