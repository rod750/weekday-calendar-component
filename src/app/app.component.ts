import { Component } from '@angular/core';
import { CalendarEvent } from './components/calendar/interfaces/calendar-event.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Simple Weeday Calendar Component';
  events: CalendarEvent[];

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
      {
        startTime: '2020-08-29T17:00:00-05:00',
        endTime: '2020-08-29T18:00:00-05:00',
        description: 'Other event'
      },
      {
        startTime: '2020-08-24T20:00:00-05:00',
        endTime: '2020-08-24T22:00:00-05:00',
        description: 'Other event'
      },
      {
        startTime: '2020-08-23T08:00:00-05:00',
        endTime: '2020-08-23T17:00:00-05:00',
        description: 'Other event'
      },
    ];
  }
}
