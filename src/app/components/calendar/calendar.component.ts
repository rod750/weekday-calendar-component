import { Component, OnInit, Input } from '@angular/core';
import moment, { Moment } from 'moment';
import { CalendarEvent } from './interfaces/calendar-event.interface';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements OnInit {
  @Input() events: CalendarEvent[];
  eventsPerDay: any[] = Array.from({length: 7}, () => []);
  days: string[] = moment.weekdays();

  constructor() {
    
  }

  ngOnInit() {
    this.eventsPerDay = this.events.reduce((events: any[], event) => {
      const weekday: number = moment(event.startTime).weekday();

      events[weekday].push(event);

      return events;
    }, this.eventsPerDay);
  }
}
