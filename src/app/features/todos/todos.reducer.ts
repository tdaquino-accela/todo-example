import { v4 as uuid } from 'uuid';
import { createReducer, on, Action } from '@ngrx/store';
import * as todoAction from './todos.actions';
import { Todo, TodosState } from './todos.model';

export const initialState: TodosState = {
  items: [
    { id: uuid(), name: 'Open Todo list example', description: 'Description for open todo list example', done: true },
    { id: uuid(), name: 'Check the other examples', description: 'Description for check the other examples', done: false },
    {
      id: uuid(),
      name: 'Use Angular ngRx Material Starter in your project',
      description: 'Description for using Angular ngRx Material Starter in your project',
      done: false
    }
  ],
  filter: 'ALL'
};

const reducer = createReducer(
  initialState,
  on(todoAction.actionTodosAdd, (state, todo) => ({
    ...state,
    items: [
      {
        id: todo.id,
        name: todo.name,
        description: todo.description,
        done: false
      },
      ...state.items
    ]
  })),
  on(todoAction.actionTodosToggle, (state, {id}) => ({
    ...state,
    items: state.items.map((item: Todo) =>
      item.id === id ? { ...item, done: !item.done } : item
    )
  })),
  on(todoAction.actionTodosRemoveDone, (state, todo) => ({
    ...state,
    items: state.items.filter((item: Todo) => !item.done)
  })),
  on(todoAction.actionTodosFilter, (state, todo) => ({
    ...state,
    filter: todo.filter
  })),
  on(todoAction.actionTodosSetSelectedTodoId, (state, todo) => ({
    ...state,
    selectedTodoId: todo.id
  }))
);

export function todosReducer(state: TodosState | undefined, action: Action) {
  return reducer(state, action);
}
