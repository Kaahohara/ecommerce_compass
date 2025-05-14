import {
  IsString,
  IsOptional,
  IsNumber,
  IsNotEmpty,
  IsEnum,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string | undefined;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsString()
  category: string | undefined;

  @IsOptional()
  @IsString()
  gender?: string;

  @IsOptional()
  @IsString()
  color?: string;

  @IsOptional()
  @IsString()
  breed?: string;

  @IsNotEmpty()
  @IsNumber()
  price: number | undefined;

  @IsOptional()
  @IsString()
  imageUrl?: string;
}
