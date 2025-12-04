import { createReducer, on } from '@ngrx/store';
import * as userActions from './users.actions';
import { User } from './users.model';

export interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
  selectedUserId?: string;
}

export const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
  selectedUserId: undefined,
};

export const usersReducer = createReducer(
  initialState,
  on(userActions.loadUsers, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(userActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
    error: null,
  })),
  on(userActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(userActions.userSelected, (state, { userId }) => ({
    ...state,
    selectedUserId: userId,
  }))
);
