import {
  Column,
  DataType,
  Model,
  Table,
  AllowNull,
  PrimaryKey,
  AutoIncrement,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({
  tableName: 'subscriptions',
  timestamps: true, 
})
export class Subscription extends Model<Subscription> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
  })
  name!: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    validate: {
      isEmail: true,
    },
  })
  email!: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
  })
  phone?: string;

  @AllowNull(true)
  @Column({
    type: DataType.TEXT,
  })
  message?: string;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
