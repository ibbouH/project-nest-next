/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateCatDto } from 'src/dto/create-cat.dto';
import { Cat } from 'src/types/cat.type';


@Injectable()
export class CatsService {
  constructor(
    @Inject('CAT_MODEL')
    private catModel: Model<Cat>,
  ) {}

  async createCat(createCatDto: CreateCatDto): Promise<Cat> {
    const newCat = await new this.catModel(createCatDto);
    return newCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }
}