import { Module } from "@nestjs/common";

import { TMDBModule } from "../tmdb.module";
import { SearchController } from "./search.controller";
import { SearchService } from "./search.service";

@Module({
  imports: [TMDBModule],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
