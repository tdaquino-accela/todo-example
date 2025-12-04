import { createAction, props } from '@ngrx/store';
import { User } from './users.model';

export const loadUsers = createAction('[Users] Load Users');

export const loadUsersSuccess = createAction(
  '[Users] Load Users Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[Users] Load Users Failure',
  props<{ error: any }>()
);

export const userSelected = createAction(
  '[Users] User Selected',
  props<{ userId: string }>()
);

export const loadUserByIdSuccess = createAction(
  '[Users] Load User By Id Success',
  props<{ user: User | undefined }>()
);

export const loadUserByIdFailure = createAction(
  '[Users] Load User By Id Failure',
  props<{ error: any }>()
);