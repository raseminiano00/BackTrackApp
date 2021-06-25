import { Injectable } from '@angular/core';
import { Activity } from '../_shared';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private activities: Activity[] = [];

  constructor() { }

  addActivity(activity: Activity): void {
    this.activities.push(activity);
  }

  getActivites(): Activity[] {
    return this.activities;
  }
}
