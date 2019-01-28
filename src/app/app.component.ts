import { Component } from '@angular/core';
import { TodosServiceService } from './todos-service.service';

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

  addTodo() {
    this.todoService.addTodo();
  }

  toggleAllCompleted() {
    this.allChecked = this.todoService.toggleAllCompleteStatus(this.allChecked);
  }

  



}
