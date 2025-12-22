import { Injectable } from '@nestjs/common';
import { Post } from './interfaces/post.interfaces';

@Injectable()
export class PostsService {

    private posts:Post[]=[
        {
            id:1,
            title:'First Post',
            content:'This is the content of the first post',
            authorName:'Om Shree',
            createdAt:new Date(),
         
        },
        {
            id: 2,
            title: 'First Data',
            content: 'This is the content of the first data',
            authorName: 'Om Shree',
            createdAt: new Date(),

        },
        {
            id: 3,
            title: 'Second Post',
            content: 'This is the content of the second post',
            authorName: 'Ranu',
            createdAt: new Date(),

        }
    ];

    finAll(): Post[] {
        return this.posts;
    }


}
