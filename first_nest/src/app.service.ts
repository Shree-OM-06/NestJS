import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {

// for env file usage
constructor(private  configService: ConfigService) {}

  getHello(): string {
    const appName = this.configService.get<string>('APP_NAME','defaultValue');
    console.log(`App Name from .env file is: ${appName}`);
    return 'Hello World! Hi my name is ' + `${appName}`;
  }
}
