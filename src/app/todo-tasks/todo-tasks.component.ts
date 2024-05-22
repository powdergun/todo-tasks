import { Component, HostListener, Input, SimpleChanges } from '@angular/core';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-todo-tasks',
  templateUrl: './todo-tasks.component.html',
  styleUrls: ['../tasks/tasks.component.css', './todo-tasks.component.css']
})
export class TodoTasksComponent extends TasksComponent {
  @Input() todoTasks: string[] = [];
  @Input() progressTasks: string[] = [];
  @Input() testTasks: string[] = [];
  @Input() doneTasks: string[] = [];
  statuses = ['In Progress', 'In Testing', 'Done'];
  otherLists = [this.progressTasks, this.testTasks, this.doneTasks];
  isHovered = false;

  constructor() {
    super();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.todoTasks || changes.progressTasks || changes.testTasks || changes.doneTasks) {
      this.otherLists = [this.progressTasks, this.testTasks, this.doneTasks];
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.isHovered = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHovered = false;
  }
}
