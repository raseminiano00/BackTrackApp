import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { ActivityEventsService } from 'src/app/_services/activity-events.service';
import { Activity } from '../../models';

@Component({
  selector: 'app-occurence-chart',
  templateUrl: './occurence-chart.component.html',
  styleUrls: ['./occurence-chart.component.css']
})
export class OccurenceChartComponent implements OnInit {
  labels: Label[] = [];
  data: ChartDataSets[] = [
    { data: [], label: 'Activity Occurence' }];
  chartType: ChartType = 'radar';

  constructor(private activityEventService: ActivityEventsService) {
    this.activityEventService.refreshActivities.subscribe((activities: Activity[]) => {
      this.labels = [];
      this.data[0].data = [];
      const map = activities.map(c => c.description).reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
      console.info([...map.entries()]);

      for(const activity of map) {
        this.labels.push(activity[0]);
        this.data[0].data?.push(activity[1]);
      }
    });

  }

  ngOnInit(): void {
  }

}
