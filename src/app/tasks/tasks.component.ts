import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'shared-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  @Input() statusList = [];
  @Input() otherLists = [];
  @Input() statuses = [];
  @Input() theStatus = '';
  @Input() isHovered:boolean;
  currentTaskDescription = '';
  isCreating = false;
  isEditing = false;
  isMoving = false;
  isTaskHovered = false;

  editedTaskIndex: number = -1;
  movedTaskIndex: number = -1;

  handleEnter(event: Event) {
    let input = (<HTMLInputElement>event.target).value;
    if (this.isCreating) {
      if (input != '' && input != null) {
        this.statusList.unshift(input);
      }
    } else if (this.isEditing) {
      this.statusList[this.editedTaskIndex] = input;
    }

    this.isCreating = false;
    this.isEditing = false;
    input = '';
  }

  handleErase(index: number) {
    this.statusList.splice(index, 1);
    this.isCreating = false;
    this.isEditing = false;
    this.isMoving = false;
  }

  handleMove(taskIndex: number, statusIndex: number) {
    console.log(this.otherLists);
    this.isMoving = false;
    if (statusIndex === 0) {
      console.log(this.otherLists[0]);
      this.otherLists[0].unshift(this.statusList[taskIndex]);
      console.log(this.otherLists[0]);
    } else if (statusIndex === 1) {
      this.otherLists[1].unshift(this.statusList[taskIndex]);
    } else {
      this.otherLists[2].unshift(this.statusList[taskIndex]);
    }

    this.statusList.splice(taskIndex, 1);
  }

  handleCancel(event: Event) {
    this.isCreating = false;
    this.isEditing = false;
    (<HTMLInputElement>event.target).value = '';
  }

  handleCreate() {
    this.isCreating = true;
  }

  handleEdit(index: number, oldText: string) {
    this.isEditing = true;
    this.editedTaskIndex = index;

    this.currentTaskDescription = oldText;
  }

  handleEditStatus(index: number) {
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

  handleBlur(event: Event) {
    this.currentTaskDescription = (<HTMLInputElement>event.target).value;
  }
}
