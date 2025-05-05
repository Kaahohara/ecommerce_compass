import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  PrimaryKey,
  Default,
} from 'sequelize-typescript';

@Table({
  tableName: 'Products',
  timestamps: true,
})
export class Product extends Model {
    @PrimaryKey
    @Column({
      type: DataType.UUID,
      defaultValue: DataType.UUIDV4,
    })
    declare id: string;
  
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
      type: DataType.DECIMAL(10, 2),
      allowNull: false,
    })
    declare price: number;
  
    @Column({
      type: DataType.STRING,
    })
    declare breed: string;
  
    @Column({
      type: DataType.INTEGER,
    })
    declare age: number;
  
    @CreatedAt
    @Column({ field: 'created_at' })
    declare createdAt: Date;
  }
  
  export default Product;
  