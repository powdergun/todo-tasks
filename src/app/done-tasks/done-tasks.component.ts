import { Component, HostListener, Input, SimpleChanges } from '@angular/core';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-done-tasks',
  templateUrl: './done-tasks.component.html',
  styleUrls: ['../tasks/tasks.component.css', './done-tasks.component.css']
})
export class DoneTasksComponent extends TasksComponent {
  statuses = ['To Do', 'In Progress', 'In Testing'];
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
