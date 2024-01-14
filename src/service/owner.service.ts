/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateOwnerDto } from 'src/dto/create-owner.dto';
import { Owner } from 'src/schemas/owner.schema';

@Injectable()
export class OwnersService {
  constructor(
    @Inject('OWNER_MODEL')
    private ownerModel: Model<Owner>,
  ) {}

  async createOwner(createOwnerDto: CreateOwnerDto): Promise<Owner> {
    const newOwner = await new this.ownerModel(createOwnerDto)
    return newOwner.save()
  }
}
