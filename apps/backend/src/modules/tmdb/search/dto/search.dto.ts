import { ApiProperty } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";

import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
} from "class-validator";

export class SearchDto {
  @ApiProperty({
    example: "Star wars",
    description: "Name of the movie",
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  query!: string;

  @ApiProperty({
    description: "Include adult content",
    required: false,
    default: false,
  })
  @Transform(({ value }) => {
    if (value === "true") return true;
    if (value === "false") return false;

    return value;
  })
  @IsBoolean()
  @IsOptional()
  include_adult: boolean = false;

  @ApiProperty({
    example: "en-US",
    description: "Language",
    required: false,
  })
  @IsString()
  @IsOptional()
  language?: string = "en-US";

  @ApiProperty({
    example: 2,
    description: "Page number, starting from 1",
    required: false,
    default: 1,
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  page?: number = 1;

  @ApiProperty({
    example: "USA",
    description: "Region",
    required: false,
  })
  @IsString()
  @IsOptional()
  region?: string;

  @ApiProperty({
    example: "2026",
    description: "Year of the movie",
    required: false,
  })
  @IsString()
  @IsOptional()
  year?: string;
}
