import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosServiceService {

  constructor() { }
}

export interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  isEditing: boolean;
}