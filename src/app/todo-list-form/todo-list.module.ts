import { NgModule } from "@angular/core";
import { SharedModule } from "../_shared";
import { TodoListFormComponent } from "./todo-list-form.component";

@NgModule({
    declarations: [TodoListFormComponent],
    exports: [TodoListFormComponent],
    imports: [
        SharedModule
    ]
})
export class TodoListsFormModule {

}