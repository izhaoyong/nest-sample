import { NestFactory } from '@nestjs/core';
import { NestKoaApplication } from '@nestjs/platform-koa';
import { AppModule } from './app.module';

async function bootstrap() {
	// const app = await NestFactory.create(AppModule);
	const app = await NestFactory.create<NestKoaApplication>(AppModule);

	await app.listen(3000);
}
bootstrap();
