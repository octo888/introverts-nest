import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventsService } from '../services/events.service';
import { ScheduleEvent } from '../models/events.model';
import { v4 as uuidv4 } from 'uuid';

@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {
  }

  @Get()
  getEvents(): ScheduleEvent[] {
    return;
  }

  @Get('/:id')
  getEventById(): ScheduleEvent {
    return;
  }

  @Post()
  createEvent(@Body() body: ScheduleEvent) {
    const event: ScheduleEvent = {
      id: uuidv4() 
    }
  }
}
