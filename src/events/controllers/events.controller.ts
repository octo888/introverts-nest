import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { EventsService } from '../services/events.service';
import { CreateScheduleEventDto } from '../dto/create-event.dto';
import { GetEventsFilterDto } from '../dto/get-events-filter.dto';
import { ScheduleEvent } from '../entities/schedule-event.entity';

@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {
  }

  @Get()
  getEvents(@Query() filterDto: GetEventsFilterDto): [] {
    if (Object.keys(filterDto).length) {

    }
    return;
  }

  @Get('/:id')
  getEventById(@Param('id', ParseIntPipe) id: number): Promise<ScheduleEvent> {
    return this.eventsService.getScheduleEventById(id);
  }

  @Post()
  createEvent(@Body() body: CreateScheduleEventDto) {
    return this.eventsService.createEvent(body);
  }
}
