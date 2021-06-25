import { NgModule } from "@angular/core";
import { SharedModule } from "../_shared";
import { GreetingsComponent } from "./greetings.component";

@NgModule({
    declarations: [GreetingsComponent],
    imports: [
        SharedModule
    ],
    exports: [GreetingsComponent]
})
export class GreetingsModule {

}