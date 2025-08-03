import { Component, Input } from '@angular/core';
import { TodoItemComponent } from '../todo-item-component/todo-item-component';
import { TodoService } from '../todo-service'; 

type todoItem = {
  id : number,
  task: string;
  completed: boolean;
  markAsDeleted: boolean;
  confirmDeletion : boolean;};

@Component({
  selector: 'app-todo-list-component',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './todo-list-component.html',
  styleUrls: ['./todo-list-component.css']
})
export class TodoListComponent {
  @Input() todoTask: string = '';
  todoTasks: todoItem[] = [];
  constructor(private TodoService: TodoService) {}

  ngOnChanges() {
    this.TodoService.addTask(this.todoTask);
    this.todoTasks = this.TodoService.getTasks();

  }

  getTodos(){
    this.todoTasks = this.TodoService.getTasks();
  }




}

