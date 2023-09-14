import {
  IsString,
  IsNumber,
  IsBoolean,
  IsInt,
  Max,
  Min,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  @Min(0.01, { message: 'Preço precisa ser de no mínimo 0.01 reais' })
  @Max(9999.99, { message: 'Valor no máximo de 9999.99' })
  price: number;

  @IsString()
  photo: string;

  @IsBoolean()
  published: boolean;

  @IsInt()
  @Min(0, { message: 'Valor precisa ser no mínimo 0' })
  @Max(9999, { message: 'Valor pode ser no máximo 9999' })
  quantity: number;
}
