import { Injectable, Logger, OnModuleDestroy } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { Redis as UpstashRedis } from "@upstash/redis";
import IORedis from "ioredis";

type RedisClient = UpstashRedis | IORedis;

@Injectable()
export class RedisService implements OnModuleDestroy {
  private readonly logger = new Logger(RedisService.name);
  private readonly client: RedisClient | null;

  constructor(private readonly configService: ConfigService) {
    const redisUrl = this.configService.get<string>("REDIS_URL");

    if (redisUrl) {
      this.client = new IORedis(redisUrl);

      return;
    }

    const upstashUrl = this.configService.get<string>("KV_REST_API_URL");
    const upstashToken = this.configService.get<string>("KV_REST_API_TOKEN");

    if (!upstashUrl || !upstashToken) {
      this.logger.warn(
        "Redis credentials are missing. RedisService is disabled.",
      );
      this.client = null;

      return;
    }

    this.client = new UpstashRedis({ url: upstashUrl, token: upstashToken });
  }

  async onModuleDestroy() {
    if (this.client instanceof IORedis) {
      this.client.disconnect();
    }
  }

  isEnabled() {
    return this.client !== null;
  }

  async get<T>(key: string) {
    if (!this.client) {
      return null as T | null;
    }

    if (this.client instanceof IORedis) {
      const value = await this.client.get(key);

      if (value === null) {
        return null;
      }

      try {
        return JSON.parse(value) as T;
      } catch {
        return value as T;
      }
    }

    return this.client.get<T>(key);
  }

  async set(
    key: string,
    value: string | number | boolean | Record<string, unknown> | null,
    ttlSeconds?: number,
  ) {
    if (!this.client) {
      return null;
    }

    if (ttlSeconds) {
      if (this.client instanceof IORedis) {
        return this.client.set(key, JSON.stringify(value), "EX", ttlSeconds);
      }

      return this.client.set(key, value, { ex: ttlSeconds });
    }

    if (this.client instanceof IORedis) {
      return this.client.set(key, JSON.stringify(value));
    }

    return this.client.set(key, value);
  }

  async del(key: string) {
    if (!this.client) {
      return 0;
    }

    return this.client.del(key);
  }
}
