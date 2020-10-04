import { Module } from '@nestjs/common';
import { EventsController } from './controllers/events.controller';
import { EventsService } from './services/events.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventRepo } from './repos/event.repo';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      EventRepo
    ])
  ],
  controllers: [EventsController],
  providers: [EventsService]
})
export class EventsModule {}
