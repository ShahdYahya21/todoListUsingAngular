import { Injectable } from '@angular/core';

type todoItem = {
  id : number;
  task: string;
  completed: boolean;
  deleted: boolean;
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoItems: todoItem[] = [];
  private id = 1;

  addTask(newTask : string){
    const todoTask : todoItem = {
      id : this.id,
      task : newTask,
      completed : false,
      deleted : false
    }
    this.todoItems.push(todoTask); 
    this.id++; 
  }

  getTasks() : todoItem[]{
    return this.todoItems;
  }

  deleteTask(){

  }

  toggleTheCompletionStatus (todoID : number) : todoItem {
    for(const task of this.todoItems){
      if(task.id === todoID) {
        console.log(task.id + ' before ' + task.completed + '(in service)');
        task.completed = !task.completed;
        console.log(task.id + ' after ' + task.completed + '(in service)');
        return task;

      }
  } 
  throw new Error('Task not found');
}
}
