import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EventsService } from '../services/events.service';
import { ScheduleEvent } from '../models/events.model';
import { ScheduleEventDto } from '../dto/create-event.dto';

@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {
  }

  @Get()
  getEvents(): ScheduleEvent[] {
    return;
  }

  @Get('/:id')
  getEventById(@Param('id') id: string): ScheduleEvent {
    return;
  }

  @Post()
  createEvent(@Body() body: ScheduleEventDto) {
    return this.eventsService.createEvent(body);
  }
}
