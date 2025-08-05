import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


type todoItem = {
  id : number;
  task: string;
  completed: boolean;
  markAsDeleted: boolean;

};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private cookieService: CookieService) {
   }

  private todoItems: todoItem[] = [];
  filteredTasks: string[] = [];


 addTask(newTask: string) {
  console.log(newTask + ' typed');
  const maxId = this.todoItems.reduce((max, item) => item.id > max ? item.id : max, 0);
  const todoTask: todoItem = {
    id: maxId + 1,
    task: newTask,
    completed: false,
    markAsDeleted: false,
  };

  this.todoItems.push(todoTask);
  console.log(todoTask.id + ' pushed');
  this.cookieService.set('TestCookie', JSON.stringify(this.todoItems));
}

  getTasks() : todoItem[]{
    this.loadFromCookie(); 
    return this.todoItems;
  }



  deleteTask(todoID : number){
    this.todoItems = this.todoItems.filter(todo => todo.id !== todoID);
    this.cookieService.set('TestCookie', JSON.stringify(this.todoItems));
  }



  toggleTheCompletionStatus (todoID : number) : todoItem {
    for(const task of this.todoItems){
      if(task.id === todoID) {
        console.log(task.id + ' before ' + task.completed + '(in service)');
        task.completed = !task.completed;
        console.log(task.id + ' after ' + task.completed + '(in service)');
        this.cookieService.set('TestCookie', JSON.stringify(this.todoItems));
        return task;

      }
  } 
  throw new Error('Task not found');
}



searchTasks(task: string): todoItem[] {
  this.loadFromCookie(); 
  const lowerQuery = task.toLowerCase();
  return this.todoItems.filter(item =>
    item.task.toLowerCase().startsWith(lowerQuery)
  );
}





private loadFromCookie(): void {
  const cookie = this.cookieService.get('TestCookie');
  if (cookie) {
    this.todoItems = JSON.parse(cookie);
  } else {
    this.todoItems = [];
  }
}
}
