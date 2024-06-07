import { Component, HostListener, Input, SimpleChanges } from '@angular/core';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-progress-tasks',
  templateUrl: './progress-tasks.component.html',
  styleUrls: ['../tasks/tasks.component.css', './progress-tasks.component.css']
})
export class ProgressTasksComponent extends TasksComponent {
  statuses = ['To Do', 'In Testing', 'Done'];
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
