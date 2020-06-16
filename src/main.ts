import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Logger} from "@nestjs/common";

const logger = new Logger('Main');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3003);
  logger.log('Rest Client Listening on Port 3003')
}
bootstrap();
