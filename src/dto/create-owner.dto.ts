/* eslint-disable prettier/prettier */
import {
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from '@nestjs/class-validator';

export class CreateOwnerDto {
  @IsString()
  @MinLength(1)
  @MaxLength(20)
  @IsNotEmpty()
  readonly lastName: string;

  @IsString()
  @MinLength(1)
  @MaxLength(20)
  @IsNotEmpty()
  readonly firstName: string;

  @IsInt()
  @MinLength(1)
  @MaxLength(100)
  @IsNotEmpty()
  readonly age: number;
}
