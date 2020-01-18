import { Controller, Get } from '@nestjs/common';
import { TestService } from '../service/test.service';

@Controller('/test')
export class TestController {
    constructor(private readonly testService: TestService) { }

    @Get('hello')
    getHello(): string {
        return this.testService.getHello();
    }

    @Get('text')
    getText(): string {
        return this.testService.getText();
    }
}

