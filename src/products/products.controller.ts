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
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdatePatchProductDto } from './dto/update-patch-product.dto';
import { UpdatePutProductDto } from './dto/update-put-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  private readonly logger = new Logger(ProductsController.name);

  @Post()
  async create(@Body() data: CreateProductDto) {
    return this.productsService.create(data);
  }

  @Get()
  async findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdatePatchProductDto,
  ) {
    return this.productsService.update(id, data);
  }

  @Put(':id')
  put(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdatePutProductDto,
  ) {
    return this.productsService.put(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.productsService.remove(+id);
  }
}
