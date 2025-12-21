import { Injectable } from '@nestjs/common';


// business logic
@Injectable()
export class HelloService {

    getHello(): string {
        return `Hello World NestJS!`;
    }

    getHelloWithParams(data:string): string {
        return `Hello World NestJS! ${data}`;
    }

    getHelloWithParamsUsingUrl(name:string): string {
        return `Hello World NestJS! ${name}`;
    }

    getHelloWithQuery(name:string, age: number): string {
        return `Hello World NestJS! ${name} is ${age} years old.`;
    }
}
