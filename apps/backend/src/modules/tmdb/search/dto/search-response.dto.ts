import { ApiProperty } from "@nestjs/swagger";

export class MovieSearchResultDto {
  @ApiProperty({ example: false })
  adult!: boolean;

  @ApiProperty({ example: "/example-backdrop.jpg", nullable: true })
  backdrop_path!: string | null;

  @ApiProperty({ example: [28, 878], type: [Number] })
  genre_ids!: number[];

  @ApiProperty({ example: 603 })
  id!: number;

  @ApiProperty({ example: "en" })
  original_language!: string;

  @ApiProperty({ example: "The Matrix" })
  original_title!: string;

  @ApiProperty({ example: "A computer hacker learns about reality." })
  overview!: string;

  @ApiProperty({ example: 80.5 })
  popularity!: number;

  @ApiProperty({ example: "/example-poster.jpg", nullable: true })
  poster_path!: string | null;

  @ApiProperty({ example: "1999-03-30" })
  release_date!: string;

  @ApiProperty({ example: "The Matrix" })
  title!: string;

  @ApiProperty({ example: false })
  video!: boolean;

  @ApiProperty({ example: 8.2 })
  vote_average!: number;

  @ApiProperty({ example: 20000 })
  vote_count!: number;
}

export class SearchResponseDto {
  @ApiProperty({ example: 1 })
  page!: number;

  @ApiProperty({ type: [MovieSearchResultDto] })
  results!: MovieSearchResultDto[];

  @ApiProperty({ example: 10 })
  total_pages!: number;

  @ApiProperty({ example: 200 })
  total_results!: number;
}
