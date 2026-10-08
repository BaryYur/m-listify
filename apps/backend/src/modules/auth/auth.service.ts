import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { User } from "@prisma/client";
import * as bcrypt from "bcrypt";

import { UserService } from "../user/user.service";
import { SignInDto, SignUpDto } from "./dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  private SALT_ROUNDS = 10;

  async signUp(dto: SignUpDto) {
    const isUserExist = await this.userService.findUserByEmail(dto.email);

    if (isUserExist) {
      throw new BadRequestException("User with this email already exists");
    }

    const hashed = await bcrypt.hash(dto.password, this.SALT_ROUNDS);

    const user = await this.userService.createUser({
      userName: dto.userName,
      email: dto.email,
      password: hashed,
    });

    const token = this.generateToken(user);

    return { user: this.sanitizeUser(user), accessToken: token };
  }

  async signIn(dto: SignInDto) {
    const user = await this.userService.findUserByEmail(dto.email);

    if (!user) throw new UnauthorizedException("Invalid email");

    const match = await bcrypt.compare(dto.password, user.password);

    if (!match) throw new UnauthorizedException("Invalid password");

    const token = this.generateToken(user);

    return { user: this.sanitizeUser(user), accessToken: token };
  }

  private generateToken(user: { id: string; email: string }) {
    const payload = { sub: user.id, email: user.email };

    return this.jwtService.sign(payload);
  }

  private sanitizeUser(user: User) {
    const { password: _, ...rest } = user;

    return rest;
  }
}
