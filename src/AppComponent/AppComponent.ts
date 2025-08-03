import { Component, EventEmitter, Output, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from '../app/todo-list-component/todo-list-component';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TodoListComponent,ReactiveFormsModule],
  templateUrl: './AppComponent.html',
  styleUrl: './AppComponent.css'
})
export class AppComponent {
  protected readonly title = signal('todo-list');
  newTask = new FormControl('', Validators.required);
  newTaskName: string = '';
  submitted = false;
  submit() {
      this.submitted = true;
      if (this.newTask.invalid) {
        return;
  }
      this.submitted = false;
      this.newTaskName = this.newTask.value ?? '';
      this.newTask.reset();
  }

}
