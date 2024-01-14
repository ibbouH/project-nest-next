/* eslint-disable prettier/prettier */
// modules
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
// providers
import { ownersProviders } from 'src/providers/owner.providers';
// controllers
import { OwnersControllers } from 'src/controllers/owner.controller';
// services
import { OwnersService } from 'src/service/owner.service';

@Module({
  imports: [DatabaseModule],
  controllers: [OwnersControllers],
  providers: [OwnersService, ...ownersProviders],
})
export class OwnersModule {}
