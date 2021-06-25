import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Activity } from '../_shared';

@Injectable({
  providedIn: 'root'
})
export class ActivityEventsService {
  refreshActivities: Observable<Activity[]>;

  private refreshActivitiesSub: Subject<Activity[]> = new Subject<Activity[]>();
  constructor() {
    this.refreshActivities = this.refreshActivitiesSub.asObservable();
   }

  refreshActivityEvent(activities: Activity[]) {
    this.refreshActivitiesSub.next(activities);
  }
  
}
