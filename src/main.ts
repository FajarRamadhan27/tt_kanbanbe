import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('TT BOARD API')
    .setDescription('API FOR TT BOARD USING NEST JS & TYPESCRIPT')
    .setVersion('1.0')
    .addTag('TT-BOARD')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  app.enableCors()
  await app.listen(3001, '192.168.43.164')
}
bootstrap()
