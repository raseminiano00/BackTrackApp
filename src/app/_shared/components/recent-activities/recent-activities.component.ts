import { Component, OnInit } from '@angular/core';
import { ActivityEventsService } from 'src/app/_services/activity-events.service';
import { Activity } from '../../models';

@Component({
  selector: 'app-recent-activities',
  templateUrl: './recent-activities.component.html',
  styleUrls: ['./recent-activities.component.css']
})
export class RecentActivitiesComponent implements OnInit {

  activities: Activity[] = [];
  constructor(private activityEvents: ActivityEventsService) { }

  ngOnInit(): void {
    this.activityEvents.refreshActivities.subscribe((activities: Activity[]) => {
      this.activities = activities.sort((a,b) => b.dateAdded.getTime() - a.dateAdded.getTime()).slice(0,10);
    })
  }

}
