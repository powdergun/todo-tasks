import { Injectable } from '@angular/core';
import { type Task } from './tasks.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks = [
    {
      id: 't1',
      status: 'To Do',
      text: 'Create Github repository and share the project'
    },
    {
      id: 't2',
      status: 'To Do',
      text: 'Finish moving with status'
    },
    {
      id: 't3',
      status: 'In Progress',
      text: 'Keep text data on mouseleave'
    },
    {
      id: 't4',
      status: 'In Progress',
      text: 'Fix textarea appearing for every Task'
    },
    {
      id: 't5',
      status: 'In Progress',
      text: 'Stay hydrated'
    },
    {
      id: 't6',
      status: 'In Testing',
      text: 'Allow changing the status of the Tasks'
    },
    {
      id: 't7',
      status: 'In Testing',
      text: 'Remove Tasks with a button'
    },
    {
      id: 't8',
      status: 'In Testing',
      text: 'Remove duplicated code'
    },
    {
      id: 't9',
      status: 'Done',
      text: 'Create a project with Angular and simulate Task creations'
    },
  ]

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks); 
    }
  }

  getTasksByStatus(status:string) {
    return this.tasks.filter((task) => task.status === status);
  }

  addTask(taskDetails:Task) {
    let newId = 't' + (this.tasks.length + 1);

    taskDetails.id = newId;

    this.tasks.unshift(taskDetails);

    this.saveTasks();
  }

  removeTask(taskId:string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    
    this.saveTasks();
  }

  editTask(field:string, taskId:string, newValue:string) {
    let task = this.tasks.find((task) => task.id == taskId);

    if (field == 'status') {
      task.status = newValue;
    } else if (field == 'text') {
      task.text = newValue;
    }
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
