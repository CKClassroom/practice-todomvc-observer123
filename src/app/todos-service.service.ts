import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosServiceService {
  todoTitle = 'todomvc';
  todoPlaceHolder = 'What needs to be done?';
  newTodo = '';
  todos: Todo[] = [];
  maxId: number = this.todos.length;
  filterCondition: 'all' | 'completed' | 'active' = 'all';
  get uncompletedCount() {
    return this.todos.filter((item: Todo) => item.isCompleted === false).length;
  }

  constructor() { }

  addTodo() {
    this.todos = [...this.todos ,  {
      id: ++this.maxId,
      item: this.newTodo,
      isCompleted: false,
      isEditing: false
    }];
  }

  removeTodo(todoIndex: number) {
    // this.todos.splice(todoIndex, 1);

    this.todos = this.todos.map(_todo => {
      if (_todo.id !== todoIndex) {
        return _todo;
      }
    });
  }
  toggleComplete(todo: Todo) {
    this.todos = this.todos.map(_todo => {
      if (_todo.id === todo.id) {
        _todo.isCompleted = !_todo.isCompleted;
      }
      return _todo;
    });
  }

  toggleAllCompleteStatus(isCompletedStatus: boolean): boolean {
    isCompletedStatus = !isCompletedStatus;
    this.todos = this.todos.map(todo => ({ ...todo, isCompleted: isCompletedStatus }));
    return isCompletedStatus;
  }

  clearCompletes() {
    this.todos = this.todos.filter(item => item.isCompleted === false);
  }
}

export interface Todo {
  id: number;
  item: string;
  isCompleted: boolean;
  isEditing: boolean;
}

