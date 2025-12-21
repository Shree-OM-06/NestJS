import { Controller, Get, Param, Query } from '@nestjs/common';
// importing the service
import { HelloService } from './hello.service';


// controller is responsible for the incoming requests and returning responses back to the client
// get, put, post, delete, patch
// module-> controller-> service->controller->module in express JS

// business logic will be in the services and controller will only consume it
@Controller('hello')
// The hello in the bracket of controller is the entry point and api if we give something else then that'll be the entry.
export class HelloController {
// dependency injection and  after : we have used the name of service as per file hello.service.ts
    constructor(private readonly helloService: HelloService) {}

    //call fron "/hello" or "/hello/"

    //  if in case the routes are same then the first route it can find is considered
    @Get()
    getHelloWithoutParams(): string {
        return this.helloService.getHello();
    }

    @Get()
    getHelloFromHello(): string {
        return this.helloService.getHelloWithParams("from Hello Controller");
    }

  
// call from "/hello/first-route"
    @Get('params')
    getHelloFromFirstRoute(): string {
        return this.helloService.getHelloWithParams("from first-route");
    }

    //  call from "/hello/user/:name"
    @Get('user/:name')
    getHelloFromParamsUsingUrl(@Param('name') name: string): string {
        return this.helloService.getHelloWithParamsUsingUrl(`from first-route with name: ${name}`);
    }

// call from "/hello/query?name=value"
// query will be used for filtering and searching
    @Get('query')
    getHelloFromQuery(@Query('name') name: string, @Query('age') age: number): string {
        return this.helloService.getHelloWithQuery(`${name}`, age);
    }

}
