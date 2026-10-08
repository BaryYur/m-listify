import { Injectable, NotFoundException } from "@nestjs/common";

import { Prisma, User } from "@prisma/client";

import { DatabaseService } from "../database/database.service";

@Injectable()
export class UserService {
  constructor(private readonly database: DatabaseService) {}

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.database.user.create({ data });
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return this.database.user.findUnique({
      where: { email },
    });
  }

  async findUserById(id: string): Promise<User> {
    const user = await this.database.user.findUnique({ where: { id } });

    if (!user) {
      throw new NotFoundException("User not found");
    }

    return user;
  }
}
