import { Injectable } from '@nestjs/common';
import { HelloService } from 'src/hello/hello.service';

@Injectable()
export class UserService {
// injecting services from other mdodules
// HelloModule must export HelloService and UserModule must import HelloModule
    constructor(private readonly helloService: HelloService) {}

    getAllUser(){
        return [
            {id:1, name:'Om'},
            {id:2, name:'Ranu'},
            {id:3, name:'Himanshi'}
        ]
    }

    getUserById(id: number){
        const user=this.getAllUser().find(user=>user.id===id);
        return user?user:`User with id ${id} not found`;
    }

    getWelcomeMessage(userId: number){

        const user=this.getUserById(userId);
        if(!user) {return `User with id ${userId} not found`;}
        return this.helloService.getHelloWithParams(user['name']);
    }
}
