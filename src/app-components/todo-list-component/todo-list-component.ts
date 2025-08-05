import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TodoItemComponent } from '../todo-item-component/todo-item-component';
import { TodoService } from '../../todo-service';
import { TodoItem } from '../../models';


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

  todoTasks: TodoItem[] = [];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoTasks = this.todoService.getTasks();

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['todoTask'] && changes['todoTask'].currentValue) {
      this.todoService.addTask(this.todoTask);
      this.todoTask = '';
    }

    if (changes['searchedTodoItem']) {
      this.todoTasks = this.searchedTodoItem
        ? this.todoService.searchTasks(this.searchedTodoItem)
        : this.todoService.getTasks();
    }
  }

  getTodos() {
    this.todoTasks = this.todoService.getTasks();
  }


}

