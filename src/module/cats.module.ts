/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { CatsControllers } from "src/controllers/cat.controller";
import { DatabaseModule } from "src/database/database.module";
import { catsProviders } from "src/providers/cats.providers";
import { CatsService } from "src/service/cat.service";


@Module({
  imports: [DatabaseModule],
  controllers: [CatsControllers],
  providers: [
    CatsService,
    ...catsProviders,
  ],
})

export class CatsModule {}