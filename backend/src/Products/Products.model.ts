import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  PrimaryKey,
  Default,
  AutoIncrement,
  AllowNull,
} from 'sequelize-typescript';

export enum ProductType {
  PET = 'Pet',
  PRODUCT = 'Product',
}

@Table({
  tableName: 'Products',
  timestamps: true,
})
export class Product extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  declare id: number;
  
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
  })
  declare gender: string;

  @Column({
    type: DataType.STRING,
  })
  declare color: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare price: number;

  @Column({
    type: DataType.STRING,
  })
  declare breed: string;
  
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare age: string;

  @Column({
    type: DataType.STRING,  
  })
  declare imageUrl: string;
  
  @Column({
    type: DataType.STRING,  
  })
  declare sku: string;

  @Column({
    type: DataType.STRING,  
  })
  declare vaccinated: boolean;

  @Column({
    type: DataType.STRING,  
  })
  declare dewormed: boolean;

  
  @Column({
    type: DataType.STRING,  
  })
  declare cert: boolean;

  
  @Column({
    type: DataType.STRING,  
  })
  declare microchip: boolean;

  
  @Column({
    type: DataType.STRING,  
  })
  declare location: boolean;

  
  @Column({
    type: DataType.STRING,  
  })
  declare additionalInformation: string;

  @Column({
    type: DataType.ENUM(...Object.values(ProductType)),
    allowNull: false,
    defaultValue: ProductType.PRODUCT,
  })
  declare category: ProductType;

  @Column({ field: 'published_at' })
  @CreatedAt
  declare publishedAt: Date;

}
export default Product;
