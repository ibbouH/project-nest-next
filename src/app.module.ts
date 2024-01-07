/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CatsModule } from './module/cats.module';
import { MongooseModule } from '@nestjs/mongoose';
import "dotenv/config";

@Module({
  imports: [
    MongooseModule.forRoot(process.env.URL),
    CatsModule,
  ],
})
export class AppModule {}
