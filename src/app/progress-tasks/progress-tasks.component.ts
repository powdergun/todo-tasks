import { Component, HostListener, Input, SimpleChanges } from '@angular/core';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-progress-tasks',
  templateUrl: './progress-tasks.component.html',
  styleUrls: ['../tasks/tasks.component.css', './progress-tasks.component.css']
})
export class ProgressTasksComponent extends TasksComponent {
  @Input() todoTasks: string[] = [];
  @Input() progressTasks: string[] = [];
  @Input() testTasks: string[] = [];
  @Input() doneTasks: string[] = [];
  statuses = ['To Do', 'In Testing', 'Done'];
  otherLists = [this.todoTasks, this.testTasks, this.doneTasks];
  isHovered = false;

  constructor() {
    super();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.todoTasks || changes.progressTasks || changes.testTasks || changes.doneTasks) {
      this.otherLists = [this.todoTasks, this.testTasks, this.doneTasks];
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.isHovered = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHovered = false;
  }
}
