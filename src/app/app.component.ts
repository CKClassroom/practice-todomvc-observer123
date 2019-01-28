import { Component } from '@angular/core';
import { TodosServiceService, Todo } from './todos-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public todoService: TodosServiceService) {}

  title = this.todoService.todoTitle;
  newPlaceHolder = this.todoService.todoPlaceHolder;
  newTodo: string = this.todoService.newTodo;
  allChecked = false;
  todos = this.todoService.todos;
  filterCondition = this.todoService.filterCondition;

  addTodo(inputElement: HTMLInputElement): void {
    this.todoService.addTodo(inputElement);
  }

  toggleAllCompleted(): void {
    this.allChecked = this.todoService.toggleAllCompleteStatus(this.allChecked);
  }

  toggleCompleted(todo: Todo): void {
    this.todoService.toggleComplete(todo);
  }

  setTodoEditing(todo: Todo): void {
    this.todoService.setTodoEditing(todo);
  }

  removeTodo(itemIndex: number): void {
    this.todoService.removeTodo(itemIndex);
  }

}
