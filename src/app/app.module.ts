import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from './navbar/navbar.module';
import { SharedModule } from './_shared';
import { TodoListsFormModule } from './todo-list-form/todo-list.module';
import { GreetingsModule } from './greetings/greetings.module';
import { DashboardsModule } from './dashboards/dashboards.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NavbarModule,
    SharedModule,
    TodoListsFormModule,
    GreetingsModule,
    DashboardsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
