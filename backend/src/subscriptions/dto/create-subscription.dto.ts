import { IsOptional, IsEmail, IsString } from 'class-validator';

export class CreateSubscriptionDto {
  @IsOptional()
  @IsString({ message: 'name must be a string' })
  name?: string;

  @IsEmail({}, { message: 'email must be a valid email address' })
  email!: string;

  @IsOptional()
  @IsString({ message: 'phone must be a string' })
  phone?: string;

  @IsOptional()
  @IsString({ message: 'message must be a string' })
  message?: string;
}
