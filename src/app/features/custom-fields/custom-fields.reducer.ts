import { createReducer, on } from "@ngrx/store";
import * as customFieldActions from "./custom-fields.actions";
import { Countries } from "./custom-fields.model";

export interface CustomFieldsState {
  countries: Countries[];
  loading: boolean;
  error: string | null;
}

export const initialState: CustomFieldsState = {
  countries: [],
  loading: false,
  error: null,
};

export const customFieldsReducer = createReducer(
  initialState,
  on(customFieldActions.loadCountries, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(customFieldActions.loadCountriesSuccess, (state, { countries }) => ({
    ...state,
    countries,
    loading: false,
    error: null,
  })),
  on(customFieldActions.loadCountriesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);