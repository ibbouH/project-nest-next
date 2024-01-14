/* eslint-disable prettier/prettier */
// packages
import { MongooseModule } from '@nestjs/mongoose';
import "dotenv/config";
// modules
import { Module } from '@nestjs/common';
import { CatsModule } from './module/cats.module';
import { OwnersModule } from './module/owners.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.URL),
    CatsModule,
    OwnersModule,
  ],
})
export class AppModule {}
