import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Todo } from '../../todos.model';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'anms-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  imports: [ CommonModule, MatCheckboxModule],
})
export class TodoListItemComponent {
  public readonly todo = input.required<Todo>();
  public readonly onSelectTodo = output<Todo>();
  public readonly onToggleTodo = output<Todo>();
}
