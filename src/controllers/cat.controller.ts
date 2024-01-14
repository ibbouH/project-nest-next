/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { CreateCatDto } from '../dto/create-cat.dto';
import { CatsService } from 'src/service/cat.service';
import { Cat } from 'src/types/cat.type';
import { UpdateCatDto } from 'src/dto/update-cat.dto';



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

  @Put('/cat/:id')
  async updateCat(@Res() response,@Param('id') catId: string, @Body() updateCatDto: UpdateCatDto) {
    try {
      const updateCatById = await this.catsService.updateCat(catId, updateCatDto)

    return response.status(HttpStatus.OK).json({
      message: "Cat document has been updated",
      updateCatById,
    })
    } catch(error){
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'ERROR: Cat not updated!',
        error: 'Bad Request'
      })
    }
    
  }

  @Get('/cat/:id')
  async findOneCat(@Res() response, @Param('id') catId: string) {
    try {
      const getOneCatById = await this.catsService.findOneCat(catId)
console.log(getOneCatById.id)
      return response.status(HttpStatus.OK).json({
        message: `Cat document ${getOneCatById.id} has been found`,
        getOneCatById,
      })
    } catch (error){
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'ERROR: Cat not found!',
        error: 'Bad Request'
      })
    }
  }

  @Get('')
  async findAll(): Promise<Cat[]> {
    const getAllCats = await this.catsService.findAll();

    if (!getAllCats || getAllCats.length === 0){
      throw new NotFoundException("Cats document not found")
    }
    
    return getAllCats
  }

  @Delete('/cat/:id')
  async deleteOneCat(@Res() response, @Param('id') catId: string){
    try {
      const deleteOneCatById = await this.catsService.deleteOneCat(catId)

      return response.status(HttpStatus.OK).json({
        message: `Cat document ${deleteOneCatById.id} has been deleted`,
        deleteOneCatById,
      })
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'ERROR: Cat not deleted!',
        error: 'Bad Request'
      })
    }
  }
}
