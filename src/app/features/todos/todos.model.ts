export interface Todo {
  id: string;
  name: string;
  description: string;
  done: boolean;
}

export type TodosFilter = 'ALL' | 'DONE' | 'ACTIVE';

export interface TodosState {
  items: Todo[];
  filter: TodosFilter;
  selectedTodoId?: string;
}
