import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosServiceService {

  todos: Todo[] = [];
  maxId: number = this.todos.length;
  filterCondition: 'all' | 'completed' | 'active' = 'all';
  get uncompletedCount() {
    return this.todos.filter((item: Todo) => item.isCompleted === false).length;
  }

  constructor() { }

  addTodo(newTodo: string) {
    this.todos = [...this.todos ,  {
      id: ++this.maxId,
      item: newTodo,
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

  toggleAllCompleteStatus(isCompletedStatus: boolean) {
    this.todos = this.todos.map(todo => ({ ...todo, isCompleted: isCompletedStatus }));
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

