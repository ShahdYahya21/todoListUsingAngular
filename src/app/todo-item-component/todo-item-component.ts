import { Component, Input } from '@angular/core';
import { TodoService } from '../todo-service'; 
import { NgStyle } from '@angular/common';

type todoItem = {
  id : number,
  task: string;
  completed: boolean;
  deleted: boolean;
};

@Component({
  selector: 'app-todo-item-component',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './todo-item-component.html',
  styleUrl: './todo-item-component.css'
})
export class TodoItemComponent {  
constructor(private TodoService: TodoService) {}
color = 'blue';


 @Input() todoItem: todoItem = {
  id : 0,
  task: '',
  completed: false,
  deleted: false
};

localTodoItem: todoItem = {
  id : 0,
  task: '',
  completed: false,
  deleted: false
};

ngOnChanges() {
  this.localTodoItem = { ...this.todoItem };
}

completeMark(){
   console.log(this.localTodoItem.id + ' before ' + this.localTodoItem.completed + '(in component)');

 this.localTodoItem = { ...this.TodoService.toggleTheCompletionStatus(this.localTodoItem.id)};
 console.log(this.localTodoItem.id + ' after ' + this.localTodoItem.completed + '(in component)');


}


}
