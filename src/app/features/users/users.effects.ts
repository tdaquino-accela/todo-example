import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map, catchError, tap } from "rxjs/operators";
import { of } from "rxjs";
import { Router } from "@angular/router";
import { UsersService } from "./users.service";

import * as userActions from "./users.actions";

@Injectable()
export class UsersEffects {
  private actions$ = inject(Actions);
  private usersService = inject(UsersService);
  private router = inject(Router);

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.loadUsers),
      switchMap(() =>
        this.usersService.getUsers().pipe(
          map((response: any) => {
            const users = Array.isArray(response) ? response : response.users || [];
            return userActions.loadUsersSuccess({ users });
          }),
          catchError((error) => {
            return of(userActions.loadUsersFailure({ error: error.message }));
          })
        )
      )
    )
  );

  loadUserById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.userSelected),
      switchMap(({ userId }) =>
        this.usersService.getUserById(userId).pipe(
          map((user) => userActions.loadUserByIdSuccess({ user })),
          catchError((error) =>
            of(userActions.loadUserByIdFailure({ error: error.message }))
          )
        )
      )
    )
  );

  userSelected$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(userActions.userSelected),
        tap(({ userId }) => {
          this.router.navigate(['/users', userId]);
        })
      ),
    { dispatch: false }
  );
}
