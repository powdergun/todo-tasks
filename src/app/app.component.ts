import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todoTasks = [
    'Create Github repository and share the project',
    'Finish moving with status'
  ];

  progressTasks = [
    'Keep text data on mouseleave',
    'Fix textarea appearing for every Task',
    'Stay hydrated'
  ];

  testTasks = [
    'Allow changing the status of the Tasks',
    'Remove Tasks with a button'
  ];

  doneTasks = [
    'Create a project with Angular and simulate Task creations'
  ];
}
