import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ScheduleEventStatus } from '../models/events.model';

@Entity()
export class ScheduleEvent extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

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

  @Column()
  images: string[];

  @Column()
  registeredEmails: string[];

  @Column()
  status: ScheduleEventStatus

}
