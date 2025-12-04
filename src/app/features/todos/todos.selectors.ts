import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Todo, TodosState } from './todos.model';

const getTodosState = createFeatureSelector<TodosState>('todos');

export const selectTodosState = createSelector(
  getTodosState,
  (state: TodosState) => state
);

export const selectTodosItems = createSelector(
  selectTodosState,
  (state: TodosState) => state.items
);

export const selectTodosFilter = createSelector(
  selectTodosState,
  (state: TodosState) => state.filter
);

export const selectSelectedTodoId = createSelector(
  selectTodosState,
  (state: TodosState) => state.selectedTodoId
);

export const selectSelectedTodo = createSelector(
  selectTodosItems,
  selectSelectedTodoId,
  (items: Todo[], selectedTodoId: string | undefined) =>
    items.find((item) => item.id === selectedTodoId)
);

export const selectTodos = createSelector(
  selectTodosItems,
  selectTodosFilter,
  (items: Todo[], filter: string) => {
    if (filter === 'ALL') {
      return items;
    } else {
      const predicate =
        filter === 'DONE' ? (t: Todo) => t.done : (t: Todo) => !t.done;
      return items.filter(predicate);
    }
  }
);

export const selectRemoveDoneTodosDisabled = createSelector(
  selectTodosItems,
  (items: Todo[]) => !items.some((item) => item.done)
);
