import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ActivityService } from '../_services';
import { ActivityEventsService } from '../_services/activity-events.service';
import { Activity } from '../_shared/models';

@Component({
  selector: 'app-todo-list-form',
  templateUrl: './todo-list-form.component.html',
  styleUrls: ['./todo-list-form.component.css']
})
export class TodoListFormComponent implements OnInit {
  todoForm: FormGroup;

  model!: NgbDateStruct;
  date!: { year: number; month: number; };

  constructor(
    private activityService: ActivityService,
    private activityEvents: ActivityEventsService) {
    this.todoForm = new FormGroup({
      'description': new FormControl(null, Validators.required),
      'hours': new FormControl(null, Validators.required),
      'date': new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
  }

  addTodo() {
    const toAdd: Activity = {
      date: new Date(this.todoForm.get('date')?.value.year, this.todoForm.get('date')?.value.month-1, this.todoForm.get('date')?.value.day),
      description: this.todoForm.get('description')?.value,
      spentHours: this.todoForm.get('hours')?.value,
      dateAdded: new Date()
    };

    this.activityService.addActivity(toAdd);

    this.activityEvents.refreshActivityEvent(this.activityService.getActivites());
    this.todoForm.reset();
  }
}
