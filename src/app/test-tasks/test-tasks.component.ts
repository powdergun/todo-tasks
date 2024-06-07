import { Component, HostListener, Input, SimpleChanges } from '@angular/core';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-test-tasks',
  templateUrl: './test-tasks.component.html',
  styleUrls: ['../tasks/tasks.component.css', './test-tasks.component.css']
})
export class TestTasksComponent extends TasksComponent {
  statuses = ['To Do', 'In Progress', 'Done'];
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
