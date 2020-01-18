import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
    getHello(): string {
        return 'Hello test World!';
    }

    getText(): string {
        return 'This is test text!';
    }
}
