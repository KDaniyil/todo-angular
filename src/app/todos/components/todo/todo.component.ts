import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit, OnChanges {
  @Input()
  todo!: TodoInterface;

  @Input()
  isEditing!: boolean;

  @Output() setEditingId: EventEmitter<string | null> = new EventEmitter();

  @ViewChild('textInput')
  textInput!: ElementRef;

  edititingText: string = '';

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.edititingText = this.todo.text;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isEditing'].currentValue) {
      setTimeout(() => {
        this.textInput.nativeElement.focus();
      }, 0);
    }
  }

  setTodoInEditMode(): void {
    this.setEditingId.emit(this.todo.id);
  }

  removeTodo(): void {
    this.todosService.removeTodo(this.todo.id);
  }

  toggleTodo(): void {
    this.todosService.toggleTodo(this.todo.id);
  }

  changeText(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.edititingText = value;
  }

  changeTodo() {
    this.todosService.changeTodo(this.todo.id, this.edititingText);
    this.setEditingId.emit(null);
  }
}
