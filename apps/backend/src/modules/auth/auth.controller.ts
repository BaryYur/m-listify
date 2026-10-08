import { Body, Controller, Post, Res } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

import { type Response } from "express";

import { AUTH_COOKIE_MAX_AGE_MS } from "../../common/constants";
import { SuccessResponseDto } from "../../common/dto/success.dto";
import { AuthService } from "./auth.service";
import { SignInDto, SignUpDto } from "./dto";

@ApiTags("Authentication")
@Controller("auth")
export class AuthController {
  public constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: "Register a new user" })
  @ApiResponse({
    status: 201,
    description: "User successfully registered",
    type: SuccessResponseDto,
  })
  @ApiResponse({ status: 400, description: "Invalid input data" })
  @Post("/sign-up")
  async signUp(
    @Body() dto: SignUpDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { accessToken } = await this.authService.signUp(dto);

    const isProduction = process.env.NODE_ENV === "production";

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: isProduction ? "none" : "lax",
      maxAge: AUTH_COOKIE_MAX_AGE_MS,
      path: "/",
    });

    return { success: true };
  }

  @ApiOperation({ summary: "Login a user" })
  @ApiResponse({
    status: 200,
    description: "User successfully logged in",
    type: SuccessResponseDto,
  })
  @ApiResponse({ status: 401, description: "Invalid credentials" })
  @Post("/sign-in")
  async signIn(
    @Body() dto: SignInDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { accessToken } = await this.authService.signIn(dto);

    const isProduction = process.env.NODE_ENV === "production";

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: isProduction ? "none" : "lax",
      maxAge: AUTH_COOKIE_MAX_AGE_MS,
      path: "/",
    });

    return { success: true };
  }

  @ApiOperation({ summary: "Logout a user" })
  @ApiResponse({
    status: 200,
    description: "User successfully logged out",
    type: SuccessResponseDto,
  })
  @Post("/logout")
  logout(@Res({ passthrough: true }) res: Response) {
    const isProduction = process.env.NODE_ENV === "production";
    res.clearCookie("accessToken", {
      path: "/",
      secure: true,
      sameSite: isProduction ? "none" : "lax",
    });

    return { success: true };
  }
}
