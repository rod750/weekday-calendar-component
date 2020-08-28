import { Component, OnInit, Input } from '@angular/core';
import { CalendarEvent } from '../interfaces/calendar-event.interface';
import moment from 'moment';

@Component({
  selector: 'app-calendar-event',
  templateUrl: './calendar-event.component.html',
  styleUrls: ['./calendar-event.component.sass']
})
export class CalendarEventComponent implements OnInit {
  @Input() event: CalendarEvent;
  startTime: string;
  endTime: string;
  description: string;
  styles: any;

  constructor() {
    
  }

  ngOnInit() {
    const startTime = moment(this.event.startTime);
    const endTime = moment(this.event.endTime);

    this.startTime = startTime.format('HH:ss');
    this.endTime = endTime.format('HH:ss');
    this.description = this.event.description;

    const topOffset = 51 * startTime.get('hour') + 51;
    const height = 51 * endTime.diff(startTime, 'hours');

    this.styles = {
      height: `${height-1}px`,
      top: `${topOffset-1}px`
    };
  }

}
