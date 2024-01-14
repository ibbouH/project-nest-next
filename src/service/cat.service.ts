/* eslint-disable prettier/prettier */
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateCatDto } from 'src/dto/create-cat.dto';
import { UpdateCatDto } from 'src/dto/update-cat.dto';
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

  async updateCat(catId: string, updateCatDto: UpdateCatDto): Promise<Cat> {
    const updateCatById = await this.catModel.findByIdAndUpdate(catId, updateCatDto, {
      new: true
    })

    if (!updateCatById) {
      throw new NotFoundException(`Document ${updateCatById} not found`)
    }
    return updateCatById
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async findOneCat(catId: string): Promise<Cat> {
    const findOneCatById = await this.catModel.findById(catId).exec()

    if (!findOneCatById) {
      throw new NotFoundException(`Document ${findOneCatById} not found`)
    }

    return findOneCatById
  }

  async deleteOneCat(catId: string): Promise<any> {
    const deleteOneCat = await this.catModel.findByIdAndDelete(catId).exec()

    if (!deleteOneCat) {
      throw new NotFoundException(`Document ${deleteOneCat} not found`)
    }

    return deleteOneCat
  }
}