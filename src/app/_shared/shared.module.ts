import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HoldableDirective } from "./directives/holdable.directive";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RecentActivitiesComponent } from './components/recent-activities/recent-activities.component';
import { OverallActivityComponent } from './components/overall-activity/overall-activity.component';
import { ChartsModule } from "ng2-charts";
import { OccurenceChartComponent } from './components/occurence-chart/occurence-chart.component';

export const components: any[] = [
    RecentActivitiesComponent,
    OverallActivityComponent,
    OccurenceChartComponent
];

export const directives: any[] = [
    HoldableDirective
];

export const importModules: any[] = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    ChartsModule
]

export const exportModules: any[] = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    ChartsModule
];


@NgModule({
    declarations: [
        ...directives,
        ...components
    ],
    imports: [
        ...importModules
    ],
    exports: [
        ...directives,
        ...exportModules,
        ...components
    ]
})
export class SharedModule { }
