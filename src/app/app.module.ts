import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoTasksComponent } from './todo-tasks/todo-tasks.component';
import { ProgressTasksComponent } from './progress-tasks/progress-tasks.component';
import { TestTasksComponent } from './test-tasks/test-tasks.component';
import { DoneTasksComponent } from './done-tasks/done-tasks.component';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoTasksComponent,
    ProgressTasksComponent,
    TestTasksComponent,
    DoneTasksComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
