import { Component, OnInit } from '@angular/core';
import moment, { Moment } from 'moment';

interface CalendarEvent {
  startTime: Moment;
  endTime: Moment;
  day: number;
  description: string;
};

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements OnInit {
  events: CalendarEvent[];
  days: string[] = moment.weekdays();

  constructor() {
    this.events = [
      {
        startTime: moment('27/08/2020 12:30'),
        endTime: moment('27/08/2020 13:30'),
        day: 0,
        description: 'This is my event'
      },
      {
        startTime: moment('29/08/2020 16:30'),
        endTime: moment('29/08/2020 17:30'),
        day: 0,
        description: 'Other event'
      },
    ];
  }

  ngOnInit() {
  }
}
