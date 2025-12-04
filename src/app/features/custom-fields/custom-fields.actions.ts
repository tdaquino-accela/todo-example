import { createAction, props } from "@ngrx/store";
import { Countries } from "./custom-fields.model";

export const loadCountries = createAction(
  '[Custom Fields] Load Countries'
);

export const loadCountriesSuccess = createAction(
  '[Custom Fields] Load Countries Success',
  props<{ countries: Countries[] }>()
);

export const loadCountriesFailure = createAction(
  '[Custom Fields] Load Countries Failure',
  props<{ error: any }>()
);
