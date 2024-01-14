/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateCatDto } from './create-cat.dto';

// With PartialType, it make properties of CreateCatDto optional, and it can be utilized in the UpdateCatDto class as per the need
export class UpdateCatDto extends PartialType(CreateCatDto) {}
