import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";

import cookieParser from "cookie-parser";

import { AppModule } from "./app.module";
import { documentation } from "./common/config";
import { HttpExceptionFilter } from "./common/filters";

async function bootstrap() {
  const configService = new ConfigService();

  const PORT = configService.get<string>("SERVER_PORT") || 4000;

  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  const origins = [
    configService.get("FRONTEND_URL"),
    "http://localhost:3000",
  ].filter(Boolean);

  app.enableCors({
    origin: origins,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    credentials: true,
  });
  app.setGlobalPrefix("api");
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      errorHttpStatusCode: 400,
    }),
  );

  documentation(app);

  await app.listen(PORT);
}
bootstrap();
