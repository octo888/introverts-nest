export interface ScheduleEvent {
  id: string;
  createdDate: string;
  scheduledDate: string;
  startTime: string;
  endTime: string;
  location: string;
  description: string;
  isRegistrationRequired: boolean;
  mainImg: string;
  images: string[];
  registeredEmails: string[];
  status: ScheduleEventStatus
}

export enum ScheduleEventStatus {
  UPCOMING = 'UPCOMING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED'
}
