import { Component, OnInit } from '@angular/core';
import moment, { Moment } from 'moment';
import { CalendarEvent } from './interfaces/calendar-event.interface';

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
        startTime: '2020-08-28T11:00:00-05:00',
        endTime: '2020-08-28T13:00:00-05:00',
        description: 'This is my event'
      },
      {
        startTime: '2020-08-28T15:00:00-05:00',
        endTime: '2020-08-28T16:00:00-05:00',
        description: 'Other event'
      },
    ];
  }

  ngOnInit() {
  }
}
