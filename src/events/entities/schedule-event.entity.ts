import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';
import { ScheduleEventStatus } from '../models/events.model';

@Entity()
export class ScheduleEvent extends BaseEntity {

  constructor(args?: any) {
    super();
    if (Boolean(args)) {
      Object.assign(this, args);
    }
  }

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  createdDate: string;

  @Column()
  scheduledDate: string;

  @Column()
  endDate: string;

  @Column()
  startTime: string;

  @Column()
  endTime: string;

  @Column()
  location: string;

  @Column()
  description: string;

  @Column()
  isRegistrationRequired: boolean;

  @Column()
  mainImg: string;

  @Column({array: true})
  images: string;

  @Column({array: true})
  registeredEmails: string;

  @Column()
  status: ScheduleEventStatus

}
