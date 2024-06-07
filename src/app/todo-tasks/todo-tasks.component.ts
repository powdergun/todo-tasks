import { Component, HostListener, Input, SimpleChanges } from '@angular/core';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-todo-tasks',
  templateUrl: './todo-tasks.component.html',
  styleUrls: ['../tasks/tasks.component.css', './todo-tasks.component.css']
})
export class TodoTasksComponent extends TasksComponent {
  statuses = ['In Progress', 'In Testing', 'Done'];
  isHovered = false;

  constructor() {
    super();
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.isHovered = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHovered = false;
  }
}
