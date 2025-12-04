import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Todo } from '../../todos.model';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Observable } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'anms-add-todo',
  templateUrl: './add-todo.component.html',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
  ],
  standalone: true,
})
export class AddTodoComponent {
  @Input() todoNameFormControl: FormControl = new FormControl('');
  @Input() todoDescriptionFormControl: FormControl = new FormControl('');
  @Input() removeDoneDisabled = false;
  @Output() onRemoveDoneTodos = new EventEmitter<void>();
  @Output() onAddTodo = new EventEmitter<Todo>();
}
