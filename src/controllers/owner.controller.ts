/* eslint-disable prettier/prettier */
import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateOwnerDto } from 'src/dto/create-owner.dto';
import { OwnersService } from 'src/service/owner.service';

@Controller('owners')
export class OwnersControllers {
  constructor(private readonly ownersService: OwnersService) {}

  @Post('')
  async createOwner(@Res() response, @Body() createOwnerDto: CreateOwnerDto) {
    try {
      const newOwner = await this.ownersService.createOwner(createOwnerDto);

      return response.status(HttpStatus.CREATED).json({
        message: 'Owner has been created successfully',
        newOwner,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'ERROR: Owner not created!',
        error: 'Bad Request',
      });
    }
  }
}
