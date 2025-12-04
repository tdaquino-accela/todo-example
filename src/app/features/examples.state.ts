import { AppState } from '../core/core.state';

import { TodosState } from './todos/todos.model';

export interface State extends AppState {
  todos: TodosState;
}
