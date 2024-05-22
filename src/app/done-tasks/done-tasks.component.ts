import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-done-tasks',
  templateUrl: './done-tasks.component.html',
  styleUrls: ['../tasks.component.css', './done-tasks.component.css']
})
export class DoneTasksComponent {
  @Input() todoTasks = [];
  @Input() progressTasks = [];
  @Input() testTasks = [];
  @Input() doneTasks = [];
  statuses = ['To Do', 'In Progress', "In Testing"];
  currentTaskDescription = '';
  isHovered = false;
  isCreating = false;
  isEditing = false;
  isMoving = false;
  isTaskHovered = false;

  editedTaskIndex:number = -1;
  movedTaskIndex:number = -1;

  @HostListener('mouseenter') onMouseEnter() {
    this.isHovered = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHovered = false;
  }

  handleEnter(event: Event) {
    let input = (<HTMLInputElement>event.target).value;
    if (this.isCreating) {
      if (input != '' && input != null) {
        this.doneTasks.unshift(input);
      }
    } else if (this.isEditing) {
      this.doneTasks[this.editedTaskIndex] = input;
    }

    this.isCreating = false;
    this.isEditing = false;
    input = '';
  }

  handleCancel(event: Event) {
    this.isCreating = false;
    this.isEditing = false;
    (<HTMLInputElement>event.target).value = '';
  }

  handleCreate() {
    this.isCreating = true;
  }

  handleEdit(index:number, oldText:string) {
    this.isEditing = true;
    this.editedTaskIndex = index;

    this.currentTaskDescription = oldText;
  }

  handleErase(index:number) {
    this.doneTasks.splice(index, 1);
    this.isCreating = false;
    this.isEditing = false;
    this.isMoving = false;
  }

  handleBlur(event: Event) {
    this.currentTaskDescription = (<HTMLInputElement>event.target).value
  }
  
  handleEditStatus(index:number) {
    if (this.movedTaskIndex == -1) {
      this.isMoving = true;
    } else if (this.movedTaskIndex == index) {
      this.isMoving = !this.isMoving;
    } else if (this.movedTaskIndex != index) {
      this.isMoving = false;
      this.isMoving = true;
    }

    this.movedTaskIndex = index;
  }

  handleMove(taskIndex:number, statusIndex:number) {
    this.isMoving = false;
    if (statusIndex === 0) {
      this.todoTasks.unshift(this.doneTasks[taskIndex]);
    } else if (statusIndex === 1) {
      this.progressTasks.unshift(this.doneTasks[taskIndex]);
    } else {
      this.testTasks.unshift(this.doneTasks[taskIndex]);
    }

    this.doneTasks.splice(taskIndex, 1);
  }
}
