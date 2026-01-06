import { Controller, Get, Param , Query, ParseIntPipe, Post, HttpCode, HttpStatus, Body} from '@nestjs/common';
import { Post as PostInterface} from './interfaces/post.interfaces';
import { PostsService } from './posts.service';
import { create } from 'domain';

@Controller('posts')
export class PostsController {
constructor(private readonly postsService: PostsService) {}

@Get()
getAllPosts(@Query('search') search? : string) : PostInterface[] {
   const extractAllPosts= this.postsService.findAll();
   if(search){
    return extractAllPosts.filter(post=>post.title.includes(search) || post.content.toLowerCase().includes(search.toLowerCase()) || post.authorName.toLowerCase().includes(search.toLowerCase()));
   }

   return extractAllPosts;
}
@Get(':id')
getSinglePost(@Param('id', ParseIntPipe) id: number) : PostInterface[] | PostInterface {
const singlePost=this.postsService.findOneById(id);
return singlePost;
}

@Post()
@HttpCode(HttpStatus.CREATED)
createPost(@Body() createPostData: Omit<PostInterface,'id' | 'createdAt'>): PostInterface[] | PostInterface {
return this.postsService.create(createPostData);
}

}