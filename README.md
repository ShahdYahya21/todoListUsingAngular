#  Angular To-Do List App

This is a simple Angular standalone component-based To-Do List application. It allows users to:

- Add new tasks
- View all tasks
- Delete tasks (with confirmation)
- Mark tasks as complete (with visual indication)

---

##  Project Structure

- `AppComponent`: Root component that initializes the app.
- `MainComponent`: Handles form input and passes data to the list.
- `TodoListComponent`: Displays the list of to-do items and listens for updates.
- `TodoItemComponent`: Renders each task, handles completion toggle and deletion.
- `TodoService`: Central service for task state management (add, delete, search, toggle).
- `models.ts`: Defines the `TodoItem` interface.

---

##  Features

- **Reactive Forms**: Used for input validation.
- **Standalone Components**: Clean and modular component setup.
- **Dynamic Rendering**: Uses Angular’s modern `@if` and `@for` syntax.
- **Conditional Styling**: Completed tasks appear differently (e.g., strikethrough).
- **Search Support**: Filter tasks by title.
- **Cookie Storage**: Tasks are stored in browser cookies for persistence between page reloads.

---

##  How to Run

1. Clone the repo
2. Run `npm install`
3. Run `ng serve`
4. Open your browser at `http://localhost:4200/`

---
## Screenshots of To-Do List App

---

###  Add New Task
<img width="720" alt="Add Task - 1" src="https://github.com/user-attachments/assets/882adb37-5b8f-4a65-b1a9-fb95d1992eb3" />
<br/>
<img width="720" alt="Add Task - 2" src="https://github.com/user-attachments/assets/65921b33-165b-426e-9de4-3e9e2ebf8598" />

---

###  Confirmation Before Deletion
<img width="720" alt="Delete Confirmation" src="https://github.com/user-attachments/assets/1a649d4a-7d47-4d12-b161-4c56eab8403a" />

---

###  Delete the Task
<img width="720" alt="Delete Task" src="https://github.com/user-attachments/assets/ef6c3e14-a499-4174-8c3d-9bc3fa7fef23" />

---

###  Mark as Completed
<img width="720" alt="Mark Completed" src="https://github.com/user-attachments/assets/bcd5d190-1833-4217-85bd-0c6a453d6b35" />

---

###  Search for a Task
<img width="720" alt="Search Task - 1" src="https://github.com/user-attachments/assets/925bf1d2-1cf3-434d-ab4c-d1b0976ec88e" />
<br/>
<img width="720" alt="Search Task - 2" src="https://github.com/user-attachments/assets/764652cb-c9b9-4489-b866-25fcbe076d86" />










