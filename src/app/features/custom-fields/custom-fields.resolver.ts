import { Injectable, inject } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import * as customFieldActions from './custom-fields.actions';

@Injectable({
  providedIn: 'root',
})
export class CustomFieldsResolver implements Resolve<any> {
  private store = inject(Store);

  resolve(
  ): Observable<boolean> {
    this.store.dispatch(customFieldActions.loadCountries());
    return of(true);
  }
}
