import { Injectable, NotFoundException } from '@nestjs/common';
import { ScheduleEventStatus } from '../models/events.model';
import { CreateScheduleEventDto } from '../dto/create-event.dto';
import { EventRepo } from '../repos/event.repo';
import { InjectRepository } from '@nestjs/typeorm';
import { ScheduleEvent } from '../entities/schedule-event.entity';
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(EventRepo)
    private eventRepo: EventRepo
  ) {}

  async getScheduleEventById(id: number): Promise<ScheduleEvent> {
    const found = await this.eventRepo.findOne(id);
    if (!found) {
      throw new NotFoundException(`Event with id ${id} not found`);
    }
    return found;
  }

  async createEvent(eventDto: CreateScheduleEventDto): Promise<ScheduleEvent> {
    const event = new ScheduleEvent({
      id: uuidv4(),
      ...eventDto,
      createdDate: new Date().toISOString(),
      registeredEmails: [],
      status: this.setStatus(new Date(eventDto.scheduledDate), new Date(eventDto.endDate))
    });
    await event.save();
    return event;
  }

  private setStatus(scheduledDate: Date, endDate: Date): ScheduleEventStatus {
    const currentDate = new Date();
    return ScheduleEventStatus.UPCOMING;
  }
}
