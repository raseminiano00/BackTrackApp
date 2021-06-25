import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { ActivityEventsService } from 'src/app/_services/activity-events.service';
import { Activity } from '../../models';

@Component({
  selector: 'app-overall-activity',
  templateUrl: './overall-activity.component.html',
  styleUrls: ['./overall-activity.component.css']
})
export class OverallActivityComponent implements OnInit {
  activitiesLabel: Label[];
  activitiesData: MultiDataSet = [];
  chartType: ChartType = 'doughnut';
  currentDate = new Date();

  constructor(private activityEventsService: ActivityEventsService) {
    this.activitiesLabel = [];
    this.activityEventsService.refreshActivities.subscribe((activities: Activity[]) => {
      this.activitiesLabel = [];
      this.activitiesData = [];
      const currentDate = new Date(`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`);

      const firstDayOfWeek = new Date(new Date(currentDate).setDate(currentDate.getDate() - currentDate.getUTCDay()));
      const lastDayOfWeek = new Date(new Date(currentDate).setDate(currentDate.getDate() + (7 - currentDate.getUTCDay())));
      let filteredRawActivity = activities.filter(data => data.date >= firstDayOfWeek && data.date <= lastDayOfWeek);
      this.activitiesLabel = [...new Set(filteredRawActivity.map(x => x.description))];

      let activityData: number[] = [];
      for (const activity of this.activitiesLabel) {
        let totalSpentHoursOnActivity: number = filteredRawActivity.filter(x => x.description === activity).reduce((x: number, y: Activity) =>
          x + y.spentHours
          , 0);
        activityData.push(totalSpentHoursOnActivity);
      }
      this.activitiesData.push(activityData);
    });
  }

  ngOnInit(): void {
  }

  currentWeekOfMonth(): number {
    var d = new Date();
    var date = d.getDate();
    var day = d.getDay();

    return Math.ceil((date + 6 - day) / 7);
  }
}
