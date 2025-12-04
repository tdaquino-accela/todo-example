import { Todo } from '../../todos.model';
import { Component, EventEmitter, input, output } from "@angular/core";
import { CommonModule } from '@angular/common';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';

@Component({
  selector: 'anms-todos-list',
  templateUrl: './todos-list.component.html',
  imports: [CommonModule, TodoListItemComponent]
})

export class TodosListComponent {
  public readonly todos = input.required<Todo[]>();
  public readonly onSelectTodo = output<Todo>();
  public readonly onToggleTodo = output<Todo>();
}