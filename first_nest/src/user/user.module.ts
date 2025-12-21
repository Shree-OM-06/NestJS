import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { HelloModule } from '../hello/hello.module';

@Module({
  imports: [HelloModule], //import other modules if needed
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
