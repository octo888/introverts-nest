import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { EventsService } from '../services/events.service';
import { IScheduleEvent } from '../models/events.model';
import { CreateScheduleEventDto } from '../dto/create-event.dto';
import { GetEventsFilterDto } from '../dto/get-events-filter.dto';

@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {
  }

  @Get()
  getEvents(@Query() filterDto: GetEventsFilterDto): IScheduleEvent[] {
    if (Object.keys(filterDto).length) {

    }
    return;
  }

  @Get('/:id')
  getEventById(@Param('id') id: string): IScheduleEvent {
    return;
  }

  @Post()
  createEvent(@Body() body: CreateScheduleEventDto) {
    return this.eventsService.createEvent(body);
  }
}
