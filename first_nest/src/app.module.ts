import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { Hello1Module } from './hello1/hello1.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { PostsModule } from './posts/posts.module';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: 'env/.env',
  }), 
  HelloModule, 
  Hello1Module, 
  UserModule, PostsModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// nest generate module hello
