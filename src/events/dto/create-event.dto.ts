export class CreateScheduleEventDto {
  name: string;
  scheduledDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  location: string;
  description: string;
  isRegistrationRequired: boolean;
  mainImg: string;
  images: string[];
}
