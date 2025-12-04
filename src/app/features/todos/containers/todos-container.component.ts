import { selectSelectedTodo, selectTodosFilter } from '../todos.selectors';
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { select, Store, StoreModule } from '@ngrx/store';

import * as todoActions from '../todos.actions';
import { Todo, TodosFilter } from '../todos.model';
import { selectTodos, selectRemoveDoneTodosDisabled } from '../todos.selectors';
import { State } from '../../index';
import { TodosListComponent } from '../components/todos-list/todos-list.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AddTodoComponent } from '../components/add-todo/add-todo.component';
import { TodoDetailComponent } from '../components/todo-detail/todo-detail.component';
import { TodoListHeaderComponent } from "../components/todo-list-header/todo-list-header.component";

@Component({
  selector: 'anms-todos',
  templateUrl: './todos-container.component.html',
  styleUrls: ['./todos-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    StoreModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatChipsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    TodosListComponent,
    AddTodoComponent,
    TodoDetailComponent,
    TodoListHeaderComponent,
    TodoListHeaderComponent
],
})
export class TodosContainerComponent {
  private store = inject(Store<State>);
  public snackBar = inject(MatSnackBar);

  todos$ = this.store.pipe(select(selectTodos))
  filter$ = this.store.pipe(select(selectTodosFilter));
  removeDoneDisabled$ = this.store.pipe(select(selectRemoveDoneTodosDisabled));
  selectedTodo$ = this.store.select(selectSelectedTodo);
  newTodo = '';

  todoNameFormControl: FormControl = new FormControl('');
  todoDescriptionFormControl: FormControl = new FormControl('');

  onNewTodoClear() {
    this.todoDescriptionFormControl.reset();
  }

  onAddTodo() {
    this.store.dispatch(todoActions.actionTodosAdd(this.todoNameFormControl.value, this.todoDescriptionFormControl.value));
    this.todoDescriptionFormControl.reset();
    this.todoNameFormControl.reset();
  }

  onSelectTodo(todo: Todo) {
    this.store.dispatch(todoActions.actionTodosSetSelectedTodoId({ id: todo.id }));
  }

  onToggleTodo(todo: Todo) {
    this.store.dispatch(todoActions.actionTodosToggle({ id: todo.id, todo }));
  }

  onRemoveDoneTodos() {
    this.store.dispatch(todoActions.actionTodosRemoveDone());
  }

  onFilterTodos(filter: TodosFilter) {
    this.store.dispatch(todoActions.actionTodosFilter({ filter }));
  }
}
