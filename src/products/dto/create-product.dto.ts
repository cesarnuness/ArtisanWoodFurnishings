import { IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  price: any;

  @IsString()
  photo: string;

  published: boolean;

  quantity: any;
}
