import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { TestController } from './controller/test.controller';
import { AppService } from './service/app.service';
import { TestService } from './service/test.service';

@Module({
    imports: [],
    controllers: [AppController, TestController],
    providers: [AppService, TestService],
})
export class AppModule { }
