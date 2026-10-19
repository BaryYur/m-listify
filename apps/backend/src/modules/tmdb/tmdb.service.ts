import {
  BadGatewayException,
  Injectable,
  ServiceUnavailableException,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

type TMDBQuery = Record<string, string | number | boolean | undefined>;

@Injectable()
export class TMDBService {
  private readonly baseUrl =
    process.env.TMDB_URL ?? "https://api.themoviedb.org/3";
  private readonly accessToken: string;

  constructor(configService: ConfigService) {
    const accessToken = configService.getOrThrow<string>(
      "TMDB_READ_ACCESS_TOKEN",
    );

    if (!accessToken.trim()) {
      throw new Error("TMDB_READ_ACCESS_TOKEN must not be empty");
    }

    this.accessToken = accessToken;
  }

  async get<TResponse>(path: string, query: TMDBQuery = {}) {
    const normalizedPath = path.replace(/^\/+/, "");
    const url = new URL(`${this.baseUrl}/${normalizedPath}`);

    for (const [key, value] of Object.entries(query)) {
      if (value !== undefined) {
        url.searchParams.set(key, String(value));
      }
    }

    let response: Response;

    try {
      response = await fetch(url, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      });
    } catch {
      throw new ServiceUnavailableException("Could not connect to TMDB");
    }

    if (!response.ok) {
      throw new BadGatewayException(
        `TMDB request failed with status ${response.status}`,
      );
    }

    return (await response.json()) as TResponse;
  }
}
