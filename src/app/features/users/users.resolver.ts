import { Injectable, inject } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import * as userActions from './users.actions';

@Injectable({
  providedIn: 'root',
})
export class UsersResolver implements Resolve<any> {
  private store = inject(Store);

  resolve(
  ): Observable<boolean> {
    this.store.dispatch(userActions.loadUsers());
    return of(true);
  }
}
