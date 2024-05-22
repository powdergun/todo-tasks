import { Component, HostListener, Input, SimpleChanges } from '@angular/core';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-done-tasks',
  templateUrl: './done-tasks.component.html',
  styleUrls: ['../tasks/tasks.component.css', './done-tasks.component.css']
})
export class DoneTasksComponent extends TasksComponent {
  @Input() todoTasks: string[] = [];
  @Input() progressTasks: string[] = [];
  @Input() testTasks: string[] = [];
  @Input() doneTasks: string[] = [];
  statuses = ['To Do', 'In Progress', 'In Test'];
  otherLists = [this.todoTasks, this.progressTasks, this.testTasks];
  isHovered = false;

  constructor() {
    super();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.todoTasks || changes.progressTasks || changes.testTasks || changes.doneTasks) {
      this.otherLists = [this.todoTasks, this.progressTasks, this.testTasks];
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.isHovered = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHovered = false;
  }
}
