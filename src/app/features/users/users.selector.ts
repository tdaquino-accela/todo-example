import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from './users.reducer';

export const selectUsersState = createFeatureSelector<UsersState>('users');

export const selectUsers = createSelector(
  selectUsersState,
  (state: UsersState) => state.users
);

export const selectUserById = createSelector(
  selectUsersState,
  (state: UsersState) =>
    state.users.find(user => String(user.id) === state.selectedUserId)
);

export const selectUsersLoading = createSelector(
  selectUsersState,
  (state: UsersState) => state.loading
);

export const selectUsersError = createSelector(
  selectUsersState,
  (state: UsersState) => state.error
);

export const usersViewModel = createSelector(
  selectUsers,
  selectUsersLoading,
  selectUsersError,
  (users, loading, error) => ({
    users,
    loading,
    error,
  })
);
