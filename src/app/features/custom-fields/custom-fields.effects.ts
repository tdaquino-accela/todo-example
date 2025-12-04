import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { CustomFieldsService } from "./custom-fields.service";

import * as customFieldActions from "./custom-fields.actions";

@Injectable()
export class CustomFieldsEffects {
  private actions$ = inject(Actions);
  private customFieldsService = inject(CustomFieldsService);

  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(customFieldActions.loadCountries),
      switchMap(() =>
        this.customFieldsService.getCountries().pipe(
          map((response: any) => {
            const countries = Array.isArray(response.data) ? response.data : response.data || [];
            return customFieldActions.loadCountriesSuccess({ countries });
          }),
          catchError((error) => {
            return of(customFieldActions.loadCountriesFailure({ error: error.message }));
          })
        )
      )
    )
  );
}