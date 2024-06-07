import { Component, Input, HostListener, inject } from '@angular/core';
import { TasksService } from './task/tasks.service';
import { Task } from './task/tasks.model';

@Component({
  selector: 'shared-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  @Input() statuses = [];
  @Input() theStatus = '';
  @Input() isHovered:boolean;
  currentTaskDescription = '';
  isCreating = false;
  isEditing = false;
  isMoving = false;
  isTaskHovered = false;

  editedTaskIndex:string = '';
  movedTaskIndex:string = '';

  private taskService = inject(TasksService);

  get tasksByStatus() {
    return this.taskService.getTasksByStatus(this.theStatus);
  }

  handleEnter(taskId: string, event: Event) {
    let input = (<HTMLInputElement>event.target).value;
    if (this.isCreating) {
      if (input != '' && input != null) {
        this.taskService.addTask({
          id: null,
          status: this.theStatus,
          text: input
        })
      }
    } else if (this.isEditing) {
      this.taskService.editTask('text', taskId, input);
    }

    this.isCreating = false;
    this.isEditing = false;
    input = '';
  }

  handleErase(taskId: string) {
    this.taskService.removeTask(taskId);
    this.isCreating = false;
    this.isEditing = false;
    this.isMoving = false;
  }

  handleMove(statusIndex: number) {
    this.isMoving = false;
    if (statusIndex === 0) {
      this.taskService.editTask('status', this.movedTaskIndex, this.statuses[0]);
    } else if (statusIndex === 1) {
      this.taskService.editTask('status', this.movedTaskIndex, this.statuses[1]);
    } else {
      this.taskService.editTask('status', this.movedTaskIndex, this.statuses[2]);
    }
  }

  handleCancel(event: Event) {
    this.isCreating = false;
    this.isEditing = false;
    (<HTMLInputElement>event.target).value = '';
  }

  handleCreate() {
    this.isCreating = true;
  }

  handleEdit(task:Task) {
    this.isEditing = true;
    this.editedTaskIndex = task.id;

    this.currentTaskDescription = task.text;
  }

  handleEditStatus(taskId: string) {
    if (this.movedTaskIndex == '') {
      this.isMoving = true;
    } else if (this.movedTaskIndex == taskId) {
      this.isMoving = !this.isMoving;
    } else if (this.movedTaskIndex != taskId) {
      this.isMoving = false;
      this.isMoving = true;
    }

    this.movedTaskIndex = taskId;
  }

  handleBlur(event: Event) {
    this.currentTaskDescription = (<HTMLInputElement>event.target).value;
  }
}
