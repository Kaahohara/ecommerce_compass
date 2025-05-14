"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const Products_model_1 = require("./Products.model");
const sequelize_2 = require("sequelize");
let ProductsService = class ProductsService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async findAll() {
        return this.productModel.findAll();
    }
    async paginate(page, limit) {
        const offset = (page - 1) * limit;
        const { count, rows } = await Products_model_1.Product.findAndCountAll({
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
    async create(data) {
        return this.productModel.create(data);
    }
    async findById(id) {
        return this.productModel.findOne({ where: { id } });
    }
    async paginateByCategory(category, page, limit, filters) {
        const offset = (page - 1) * limit;
        const priceMin = isNaN(filters.priceMin) ? 0 : filters.priceMin;
        const priceMax = isNaN(filters.priceMax) ? 999999999 : filters.priceMax;
        const where = {
            category: category,
            price: {
                [sequelize_2.Op.gte]: priceMin,
                [sequelize_2.Op.lte]: priceMax,
            },
        };
        if (filters.gender.length) {
            where.gender = {
                [sequelize_2.Op.or]: filters.gender.map((c) => ({
                    gender: {
                        [sequelize_2.Op.iLike]: c,
                    },
                })),
            };
        }
        if (filters.color.length) {
            where.color = {
                [sequelize_2.Op.in]: filters.color,
            };
        }
        if (filters.breed.length) {
            where.breed = {
                [sequelize_2.Op.in]: filters.breed,
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
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(Products_model_1.Product)),
    __metadata("design:paramtypes", [Object])
], ProductsService);
