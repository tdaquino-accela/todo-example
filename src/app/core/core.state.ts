import { RouterReducerState } from '@ngrx/router-store';
import { TodosState } from '../features/todos/todos.model';

export interface RouterStateUrl {
  url: string;
  queryParams: Record<string, any>;
  params: Record<string, any>;
}

export interface AppState {
  todos: TodosState
  router: RouterReducerState<RouterStateUrl>;
}
