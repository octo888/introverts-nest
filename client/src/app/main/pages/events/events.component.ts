import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
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

  list = [];

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    for (let i = 0; i < 7; i++) {
      this.list.push(this.data[0]);
    }
    console.log(this.list);
    this.cdr.markForCheck();
  }

}
