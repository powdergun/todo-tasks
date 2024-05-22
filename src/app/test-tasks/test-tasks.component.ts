import { Component, HostListener, Input, SimpleChanges } from '@angular/core';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-test-tasks',
  templateUrl: './test-tasks.component.html',
  styleUrls: ['../tasks/tasks.component.css', './test-tasks.component.css']
})
export class TestTasksComponent extends TasksComponent {
  @Input() todoTasks: string[] = [];
  @Input() progressTasks: string[] = [];
  @Input() testTasks: string[] = [];
  @Input() doneTasks: string[] = [];
  statuses = ['To Do', 'In Progress', 'Done'];
  otherLists = [this.todoTasks, this.progressTasks, this.doneTasks];
  isHovered = false;

  constructor() {
    super();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.todoTasks || changes.progressTasks || changes.testTasks || changes.doneTasks) {
      this.otherLists = [this.todoTasks, this.progressTasks, this.doneTasks];
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.isHovered = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHovered = false;
  }
}
