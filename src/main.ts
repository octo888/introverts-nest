import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (process.env.NODE_ENV === 'dev') {
    app.enableCors();
  }

  const port = process.env.PORT || 3000;
  await app.listen(port);
}
bootstrap();
