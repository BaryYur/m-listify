import { ApiProperty } from "@nestjs/swagger";

import { IsEmail, IsString } from "class-validator";

export class SignInDto {
  @ApiProperty({
    example: "user@example.com",
    description: "The email of the user",
  })
  @IsEmail()
  @IsString()
  email: string;

  @ApiProperty({
    example: "password123",
    description: "The password of the user",
    required: false,
  })
  @IsString()
  password: string;
}

export class SignUpDto extends SignInDto {
  @ApiProperty({
    example: "John",
    description: "Your user name",
    required: false,
  })
  @IsString()
  userName: string;
}
