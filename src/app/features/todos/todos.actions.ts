import { v4 as uuid } from 'uuid';
import { createAction, props } from '@ngrx/store';

import { Todo, TodosFilter } from './todos.model';

export const actionTodosAdd = createAction(
  '[Todos] Add',
  (name: string, description: string, id: string = uuid()) => ({ name, description, id }),
);

export const actionTodosToggle = createAction(
  '[Todos] Toggle',
  props<{ id: string; todo: Todo }>()
);

export const actionTodosSetSelectedTodoId = createAction(
  '[Todos] Set Selected Todo Id',
  props<{ id: string }>()
);

export const actionTodosRemoveDone = createAction('[Todos] Remove Done');

export const actionTodosFilter = createAction(
  '[Todos] Filter',
  props<{ filter: TodosFilter }>()
);

export const actionTodosNavigate = createAction('[Todos] Navigate', props<{ todoId: string }>());
