import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../../todo-service';
import { NgStyle } from '@angular/common';
import { TodoItem } from '../../models';
import {TODO_CONSTANTS} from './todo-item-component-constants'



@Component({
  selector: 'app-todo-item-component',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './todo-item-component.html',
  styleUrl: './todo-item-component.css'
})
export class TodoItemComponent {
  constants = TODO_CONSTANTS;
  
  constructor(private todoService: TodoService) { }
  @Output() deleteClick = new EventEmitter<void>();

  @Input() todoItem: TodoItem | null = null;
  localTodoItem: TodoItem | null = null;

  ngOnChanges() {
    this.localTodoItem = { ...this.todoItem } as TodoItem;;
  }

  completeMark() {
    if (this.localTodoItem) {
      this.localTodoItem = {
        ...this.todoService.toggleTheCompletionStatus(this.localTodoItem.id)
      };
    }
  }
  deleteTodo() {
    if (this.localTodoItem) {
      this.localTodoItem.markAsDeleted = false;
      this.todoService.deleteTask(this.localTodoItem.id);
      this.deleteClick.emit();

    }
  }

  }
