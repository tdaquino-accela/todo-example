import { NotificationService } from './../../core/notifications/notification.service';
import { Injectable, inject } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { tap, withLatestFrom } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs/operators';

import { LocalStorageService } from '../../core/local-storage/local-storage.service';

import { State } from '../examples.state';
import * as todoAction from './todos.actions';
import { selectTodosState } from './todos.selectors';

export const TODOS_KEY = 'EXAMPLES.TODOS';

@Injectable()
export class TodosEffects {
  private actions$ = inject(Actions);
  private store = inject(Store<State>);
  private localStorageService = inject(LocalStorageService);
  private snackBar = inject(MatSnackBar);
  private notificationService = inject(NotificationService);

  persistTodos$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          todoAction.actionTodosAdd,
          todoAction.actionTodosFilter,
          todoAction.actionTodosRemoveDone,
          todoAction.actionTodosToggle
        ),
        withLatestFrom(this.store.select(selectTodosState)),
        tap(([action, todos]) => this.localStorageService.setItem(TODOS_KEY, todos))
      ),
    { dispatch: false }
  );

  toggleTodo$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(todoAction.actionTodosToggle),
        tap(({ id, todo }) => {
          const newStatus = todo.done ? 'active' : 'done';
          const undo = 'Undo';
          const toggledMessage = `Todo "${todo.name}" is now ${newStatus}`;

          this.snackBar
            .open(`${toggledMessage} ${newStatus}`, undo, {
              duration: 2500,
              panelClass: 'todos-notification-overlay',
            })
            .onAction()
            .pipe(take(1))
            .subscribe(() =>
              this.store.dispatch(
                todoAction.actionTodosToggle({ id, todo: { ...todo, done: !todo.done } })
              )
            );
        })
      ),
    { dispatch: false }
  );

  addTodo$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(todoAction.actionTodosAdd),
        tap(({ name }) => {
          const addedMessage = `Todo "${name}" added`;
          this.notificationService.info(addedMessage);
        })
      ),
    { dispatch: false }
  );

  removeDoneTodos$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(todoAction.actionTodosRemoveDone),
        tap(() => {
          const removedMessage = 'Completed todos removed';
          this.notificationService.info(removedMessage);
        })
      ),
    { dispatch: false }
  );

  filterTodos$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(todoAction.actionTodosFilter),
        tap(({ filter }) => {
          const filterToMessage = 'Filtering by:';
          const filterMessage = filter.toLowerCase();
          this.notificationService.info(`${filterToMessage} ${filterMessage}`);
        })
      ),
    { dispatch: false }
  );

  constructor() {}
}
