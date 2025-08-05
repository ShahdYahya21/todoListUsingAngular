import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TodoItemComponent } from '../todo-item-component/todo-item-component';
import { TodoService } from '../todo-service';

type todoItem = {
  id: number,
  task: string;
  completed: boolean;
  markAsDeleted: boolean;
};

@Component({
  selector: 'app-todo-list-component',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './todo-list-component.html',
  styleUrls: ['./todo-list-component.css']
})
export class TodoListComponent {
  @Input() todoTask: string = '';
  @Input() searchedTodoItem: string = '';

  todoTasks: todoItem[] = [];
  constructor(private TodoService: TodoService) { }

  ngOnInit() {
    this.todoTasks = this.TodoService.getTasks();

  }

  ngOnChanges() {
    if (this.todoTask) {
      this.TodoService.addTask(this.todoTask);
      this.todoTask = ""
    }

    this.todoTasks = this.searchedTodoItem
      ? this.TodoService.searchTasks(this.searchedTodoItem)
      : this.TodoService.getTasks();
  }

  getTodos() {
    this.todoTasks = this.TodoService.getTasks();
  }


}

