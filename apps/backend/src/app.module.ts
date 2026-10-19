import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { AuthModule } from "./modules/auth/auth.module";
import { DatabaseModule } from "./modules/database/database.module";
import { RedisModule } from "./modules/redis/redis.module";
import { SearchModule } from "./modules/tmdb/search/search.module";
import { UserModule } from "./modules/user/user.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RedisModule,
    DatabaseModule,
    AuthModule,
    SearchModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
