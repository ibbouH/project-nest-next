/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty, IsString, MaxLength, MinLength } from '@nestjs/class-validator';

/* Allows me to validate my properties implemented in a class. But, you can create an interface
export class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}
*/
export class CreateCatDto {
  @IsString()
  @MinLength(1)
  @MaxLength(20)
  @IsNotEmpty()
  readonly name: string;

  @IsInt()
  @MinLength(1)
  @MaxLength(100)
  @IsNotEmpty()
  readonly age: number;

  @IsString()
  @MinLength(1)
  @MaxLength(500)
  @IsNotEmpty()
  readonly breed: string;

  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  readonly ownerId: string;
}