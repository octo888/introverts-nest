import { EntityRepository, Repository } from 'typeorm';
import { ScheduleEvent } from '../entities/schedule-event.entity';

@EntityRepository(ScheduleEvent)
export class EventRepo extends Repository<ScheduleEvent> {

}
