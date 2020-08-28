import { Component, OnInit, Input } from '@angular/core';
import { CalendarEvent } from '../interfaces/calendar-event.interface';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.sass']
})
export class CalendarDayComponent implements OnInit {
  @Input() dayName: string;
  @Input() events: CalendarEvent[];

  constructor() {
    
  }

  ngOnInit() {
    console.log(JSON.stringify(this.events));
  }

}
