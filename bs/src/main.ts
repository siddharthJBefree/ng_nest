import {ValidationPipe} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {AppModule} from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger Implementation
  const config = new DocumentBuilder().setTitle('Siddharth Jaiswal').setDescription('The API description').setVersion('1.0').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Validation Pipes Implementation
  app.useGlobalPipes(
    new ValidationPipe({
      transformOptions: {
        enableImplicitConversion: true
      }
    })
  );

  // Cors Implementation
  // app.enableCors();

  // Port Implementation
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT, () => console.log(`Server is running http://localhost:${PORT}/api`));
}

bootstrap();
