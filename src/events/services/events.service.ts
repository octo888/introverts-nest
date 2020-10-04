import { Injectable } from '@nestjs/common';
import { ScheduleEvent, ScheduleEventStatus } from '../models/events.model';
import { ScheduleEventDto } from '../dto/create-event.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class EventsService {
  constructor() {
  }

  createEvent(eventDto: ScheduleEventDto) {
    const event: ScheduleEvent = {
      id: uuidv4(),
      ...eventDto,
      createdDate: new Date().toISOString(),
      registeredEmails: [],
      status: this.setStatus(new Date(eventDto.scheduledDate), new Date(eventDto.endDate))
    }
  }

  private setStatus(scheduledDate: Date, endDate: Date): ScheduleEventStatus {
    const currentDate = new Date();
    return ScheduleEventStatus.UPCOMING;
  }
}
