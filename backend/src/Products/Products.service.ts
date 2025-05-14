import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './Products.model';
import { Op } from 'sequelize';

@Injectable()
export class ProductsService {
  prisma: any;
  constructor(
    @InjectModel(Product)
    private productModel: typeof Product,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productModel.findAll();
  }
  async paginate(page: number, limit: number) {
    const offset = (page - 1) * limit;
    const { count, rows } = await Product.findAndCountAll({
      limit,
      offset,
      order: [['published_at', 'DESC']],
    });

    return {
      products: rows,
      totalItems: count,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    };
  }
  async create(data: Partial<Product>): Promise<Product> {
    return this.productModel.create(data);
  }
  async findById(id: number): Promise<Product | null> {
    return this.productModel.findOne({ where: { id } });
  }
async paginateByCategory(
  category: string,
  page: number,
  limit: number,
  filters: {
    gender: string[];
    color: string[];
    breed: string[];
    priceMin: number;
    priceMax: number;
  }
) {
  const offset = (page - 1) * limit;

  const priceMin = isNaN(filters.priceMin) ? 0 : filters.priceMin;
  const priceMax = isNaN(filters.priceMax) ? 999999999 : filters.priceMax;

  const where: any = {
    category: category as any,
    price: {
      [Op.gte]: priceMin,
      [Op.lte]: priceMax,
    },
  };

  if (filters.gender.length) {
    where.gender = {
      [Op.or]: filters.gender.map((c) => ({
        gender: {
          [Op.iLike]: c,
        },
      })),
    };
  }

  if (filters.color.length) {
    where.color = {
      [Op.in]: filters.color,
    };
  }
  if (filters.breed.length) {
    where.breed = {
      [Op.in]: filters.breed,
    };
  }
  const { count, rows } = await this.productModel.findAndCountAll({
    where,
    offset,
    limit,
  });

  return {
    products: rows,
    totalItems: count,
    totalPages: Math.ceil(count / limit),
    currentPage: page,
  };
}

}
