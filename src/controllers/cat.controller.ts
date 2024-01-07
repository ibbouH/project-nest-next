/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateCatDto } from '../dto/create-cat.dto';
import { CatsService } from 'src/service/cat.service';
import { Cat } from 'src/types/cat.type';



@Controller('cats')
export class CatsControllers {
  constructor(private readonly catsService: CatsService) {}

  @Post('')
  async createCat(@Res() response, @Body() createCatDto: CreateCatDto) {
    try {
      const newCat = await this.catsService.createCat(createCatDto);

      return response.status(HttpStatus.CREATED).json({
        message: 'Cat has been created successfully',
        newCat
      })

    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'ERROR: Cat not created!',
        error: 'Bad Request'
      });
    }
  }

  @Get('')
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
