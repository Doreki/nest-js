import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { ApiController } from './api/api.controller';

@Module({
  imports: [],
  controllers: [ApiController, AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
