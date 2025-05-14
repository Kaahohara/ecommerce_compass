import { Controller, Get, Post, Body, Query, Param, NotFoundException } from '@nestjs/common';
import { ProductsService } from './Products.service';
import { Product } from './Products.model';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll(@Query('page') page = '1', @Query('limit') limit = '8') {
    const pageNumber = Math.max(1, parseInt(page, 10));
    const limitNumber = Math.max(1, parseInt(limit, 10));
    return this.productsService.paginate(pageNumber, limitNumber);
  }
  
  @Get(':id')
  async findById(@Param('id') id: number): Promise<Product> {
    const product = await this.productsService.findById(id);
    if (!product) {
      throw new NotFoundException('Produto não encontrado');
    }
    return product;
  }

  @Get('category/:category')
  async findByCategory(
    @Param('category') category: string,
    @Query('page') page = '1',
    @Query('limit') limit = '8',
    @Query('gender') gender?: string,
    @Query('color') color?: string,
    @Query('breed') breed?: string,
    @Query('priceMin') priceMin = '0',
    @Query('priceMax') priceMax = '9999999999999',
  ) {
  const pageNumber = Math.max(1, parseInt(page, 10));
  const limitNumber = Math.max(1, parseInt(limit, 10));

  return this.productsService.paginateByCategory(
    category,
    pageNumber,
    limitNumber,
    {
      gender: gender?.split(',') ?? [],
      color: color?.split(',') ?? [],
      breed: breed?.split(',') ?? [],
      priceMin: parseFloat(priceMin),
      priceMax: parseFloat(priceMax),
    }
  );
}

  @Post()
  create(@Body() body: Partial<Product>): Promise<Product> {
    return this.productsService.create(body);
  }
}
