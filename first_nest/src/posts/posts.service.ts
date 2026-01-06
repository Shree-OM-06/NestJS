import { Injectable, NotFoundException } from '@nestjs/common';
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

    findAll(): Post[] {
        return this.posts;
    }

    findOneById(id: number): Post {
        const singlePost=this.posts.find(post=>post.id===id);
        if(!singlePost){
            throw new NotFoundException(`Error 404: Post with id: ${id} is not found`)
        }
        return singlePost;
    }

    create(createPostData: Omit<Post,'id'| 'createdAt'>): Post {
        const newPost: Post = {
id: this.getNextId(),
            ...createPostData,
            createdAt: new Date(),
        }

       this.posts.push(newPost);
       return newPost; 
    }

    private getNextId(): number {
        return this.posts.length > 0 ? Math.max(...this.posts.map(post => post.id)) + 1 : 1;  
    }

    
}
