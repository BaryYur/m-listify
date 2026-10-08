import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";

import type { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";

import { UserService } from "../user/user.service";

export interface JwtPayload {
  sub: string;
  email: string;
}

const cookieExtractor = (req: Request): string | null => {
  if (!req || !req.cookies) return null;

  const cookies = req.cookies;

  return cookies.accessToken || null;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private usersService: UserService,
    private config: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
      ignoreExpiration: false,
      secretOrKey: config.get<string>("JWT_SECRET") || "",
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.usersService.findUserById(payload.sub);

    if (!user) return null;

    const { password: _, ...rest } = user;

    return rest;
  }
}
