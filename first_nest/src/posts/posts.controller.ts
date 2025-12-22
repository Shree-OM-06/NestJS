import { Controller, Get, Param , Query} from '@nestjs/common';
import { Post  as PostInterface} from './interfaces/post.interfaces';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
constructor(private readonly postsService: PostsService) {}

@Get()
getAllPosts(@Query('search') search? : string) : PostInterface[] {
   const extractAllPosts= this.postsService.finAll();
   if(search){
    return extractAllPosts.filter(post=>post.title.includes(search) || post.content.toLowerCase().includes(search.toLowerCase()) || post.authorName.toLowerCase().includes(search.toLowerCase()));
   }

   return extractAllPosts;
}

}
