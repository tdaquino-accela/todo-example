import { Component, input, output } from "@angular/core";
import { Todo } from '../../todos.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'anms-todo-detail',
  templateUrl: './todo-detail.component.html',
  imports: [CommonModule]
})

export class TodoDetailComponent {
  public readonly todo = input.required<Todo | undefined | null>();
}