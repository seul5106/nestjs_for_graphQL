import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const AppOptions = {
    cors: {
      credentials: true,
      origin: ['http://localhost:3000'],
    },
  };
  const app: NestExpressApplication = await NestFactory.create(
    AppModule,
    AppOptions,
  );
  const port = 5001;
  await app.listen(port).then(() => {
    console.log(`server on port: ${port}`);
  });
}
bootstrap();
