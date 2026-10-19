import { Injectable } from "@nestjs/common";

import { TMDBService } from "../tmdb.service";
import { SearchDto, SearchResponseDto } from "./dto";

@Injectable()
export class SearchService {
  constructor(private readonly tmdbService: TMDBService) {}

  public searchFilm(searchDto: SearchDto) {
    return this.tmdbService.get<SearchResponseDto>("search/movie", {
      query: searchDto.query,
      include_adult: searchDto.include_adult,
      language: searchDto.language,
      page: searchDto.page,
      region: searchDto.region,
      year: searchDto.year,
    });
  }
}
