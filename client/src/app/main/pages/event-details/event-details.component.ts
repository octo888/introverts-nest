import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  data = [
    {
      id: 'asdsadsd2132',
      name: 'Some Name',
      date: '2020-21-08',
      startTime: '15:00',
      endTime: '17:00',
      description: 'Text lorem ipsum',
      subtitle: 'WS HAUF'
    }
  ];
  eventId: string;
  event: any;
  routeSub: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe(params => {
      this.eventId = params.id;
      this.getEvent(this.eventId);
    });
  }

  getEvent(id: string): void {
    this.event = this.data.find(el => el.id === id);
  }

}
