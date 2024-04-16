import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { constants } from './data/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    next();
  });

  app.enableCors({
    allowedHeaders: '*',
    origin: [
      'http://localhost:4200',
      //'http://localhost:3000',
      'http://www.google.com',
      'https://www.facebook.com',
    ],
  });

  await app.listen(constants.port).then(() => {
    console.log(`listening to port: ${constants.port}`);
  });
}
bootstrap();
