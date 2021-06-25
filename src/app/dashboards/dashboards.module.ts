import { NgModule } from "@angular/core";
import { SharedModule } from "../_shared";
import { DashboardsComponent } from "./dashboards.component";

@NgModule({
    declarations:[DashboardsComponent],
    imports: [SharedModule],
    exports:[DashboardsComponent],
})
export class DashboardsModule {

}