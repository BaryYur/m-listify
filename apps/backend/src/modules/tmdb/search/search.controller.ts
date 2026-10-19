import { Controller, Get, Query } from "@nestjs/common";
import {
  ApiBadGatewayResponse,
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiServiceUnavailableResponse,
  ApiTags,
} from "@nestjs/swagger";

import { SearchDto, SearchResponseDto } from "./dto";
import { SearchService } from "./search.service";

@ApiTags("TMDB")
@Controller("tmdb/search")
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  @ApiOperation({ summary: "Search movies on TMDB" })
  @ApiQuery({
    name: "query",
    required: true,
    type: String,
    example: "The Matrix",
    description: "Movie title to search for",
  })
  @ApiQuery({
    name: "include_adult",
    required: false,
    type: Boolean,
    example: false,
    description: "Whether to include adult content",
  })
  @ApiQuery({
    name: "language",
    required: false,
    type: String,
    example: "en-US",
    description: "Language for the returned results",
  })
  @ApiQuery({
    name: "page",
    required: false,
    type: Number,
    example: 1,
    description: "Page number, starting from 1",
  })
  @ApiQuery({
    name: "region",
    required: false,
    type: String,
    example: "US",
    description: "ISO 3166-1 region code",
  })
  @ApiQuery({
    name: "year",
    required: false,
    type: String,
    example: "1999",
    description: "Filter by release year",
  })
  @ApiOkResponse({
    description: "Matching movies returned by TMDB",
    type: SearchResponseDto,
  })
  @ApiBadRequestResponse({ description: "Invalid query parameters" })
  @ApiBadGatewayResponse({
    description: "TMDB returned an unsuccessful response",
  })
  @ApiServiceUnavailableResponse({ description: "Could not connect to TMDB" })
  searchMovies(@Query() searchDto: SearchDto) {
    return this.searchService.searchFilm(searchDto);
  }
}
