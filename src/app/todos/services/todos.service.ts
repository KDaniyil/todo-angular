import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoInterface } from '../types/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos$ = new BehaviorSubject<TodoInterface[]>([]);
  addTodo(text: string): void {
    const newTodo: TodoInterface = {
      id: Math.random().toString(16),
      text: text,
      isCompleted: false,
    };
    const updatedTodos = [...this.todos$.getValue(), newTodo];
    this.todos$.next(updatedTodos);
  }
  constructor() {}
}
