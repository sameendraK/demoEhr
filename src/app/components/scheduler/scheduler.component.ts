// import { Component, ChangeDetectionStrategy } from '@angular/core';
// import { Subject } from 'rxjs';
// import {
//   CalendarEvent,
//   CalendarEventTimesChangedEvent,
//   CalendarWeekViewBeforeRenderEvent,
//   CalendarDayViewBeforeRenderEvent
// } from 'angular-calendar';
// import { colors } from './scheduler-utils/colors'
// import { CommonModule } from '@angular/common';
// import {CalendarHeaderComponent} from './scheduler-utils/calendar-header.component'

// @Component({
//   selector: 'app-scheduler',
//   changeDetection: ChangeDetectionStrategy.OnPush,
//   templateUrl: './scheduler.component.html',
//   imports:[CommonModule],
//   standalone:true
// })
// export class SchedulerComponent {
//   view: string = 'week';
//   snapDraggedEvents = true;

//   dayStartHour = 6;
//   viewDate: Date = new Date();

//   events: CalendarEvent[] = [
//     {
//       title: 'Draggable event',
//       color: colors.yellow,
//       start: new Date(),
//       draggable: true
//     },
//     {
//       title: 'A non draggable event',
//       color: colors.blue,
//       start: new Date()
//     }
//   ];

//   refresh: Subject<any> = new Subject();

//   eventTimesChanged({
//     event,
//     newStart,
//     newEnd
//   }: CalendarEventTimesChangedEvent): void {
//     event.start = newStart;
//     event.end = newEnd;
//     // this.refresh.next();
//   }
//   public segmentIsValid(date: Date) {
//     // valid if time is greater than 0800 andd less than 1700
//     return date.getHours() >= 8 && date.getHours() <= 17;
//   }
//   beforeDayViewRender(day: CalendarDayViewBeforeRenderEvent): void {
//     // day.body.hourGrid.forEach(hour => {
//     //   hour.segments.forEach(segment => {
//     //     if ((!this.segmentIsValid(segment.date))) {
//     //       delete segment.cssClass;
//     //       segment.cssClass = 'cal-disabled';
//     //     }
//     //   });
//     // });
//   }
//   beforeWeekViewRender(body: CalendarWeekViewBeforeRenderEvent): void {
//     body.hourColumns.forEach(hourCol => {
//       hourCol.hours.forEach(hour => {
//         hour.segments.forEach(segment => {
//           if (!this.segmentIsValid(segment.date)) {
//             delete segment.cssClass;
//             segment.cssClass = 'cal-disabled';
//           }
//         });
//       });
//     });
//   }
// }
