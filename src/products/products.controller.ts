import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaClient } from '@prisma/client';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @Render('products/allproducts')
  async findAll() {
    const prisma = new PrismaClient(); // Create a new instance of PrismaClient
    try {
      const products = await prisma.product.findMany(); // Use the PrismaClient instance to fetch products
      console.log(products);

      return { products };
    } catch (error) {
      // Handle errors
      throw error;
    } finally {
      await prisma.$disconnect(); // Disconnect the PrismaClient instance after use
    }
  }

  @Get('new')
  @Render('products/newproduct')
  newProduct() {
    return { message: 'Hello world!' };
  }

  @Post('create')
  async createProduct(@Body() body) {
    const prisma = new PrismaClient();
    const { name, description, price, photo, quantity, published } = body;

    // Necessary conversions
    const priceFloat = parseFloat(price);
    const quantityInt = parseInt(quantity);
    const publishedBool = published === 'on' ? true : false;
    const product = await prisma.product.create({
      data: {
        name,
        description,
        price: priceFloat, // Use the parsed float value
        photo,
        quantity: quantityInt,
        published: publishedBool,
      },
    });

    return product;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
