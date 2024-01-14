/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

/* Here, I'm use decorator 
But, if I'm not used decorator, I can define my schema like this :
export const CatSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});
*/
@Schema()
export class Cat {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  breed: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Owner"})
  ownerId: mongoose.Schema.Types.ObjectId;
}

export const CatSchema = SchemaFactory.createForClass(Cat);

