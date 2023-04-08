import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { BatchController } from './batch.controller';
import { TaskService } from './task.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [TaskService],
  controllers: [BatchController],
})
export class BatchModule {}
