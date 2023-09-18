import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Logger,
  Put,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { UpdatePutCategoryDto } from './dto/update-put-category.dto';
import { UpdatePatchCategoryDto } from './dto/update-patch-category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}
  private readonly logger = new Logger(CategoriesController.name);

  @Post()
  async create(@Body() data: CreateCategoryDto) {
    return this.categoriesService.create(data);
  }

  @Get()
  async findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdatePatchCategoryDto,
  ) {
    return this.categoriesService.update(id, data);
  }

  @Put(':id')
  put(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdatePutCategoryDto,
  ) {
    return this.categoriesService.put(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.categoriesService.remove(+id);
  }
}
