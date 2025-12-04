import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CustomFieldsState } from "./custom-fields.reducer";

export const selectCustomFieldsState = createFeatureSelector<CustomFieldsState>('customFields');

export const selectCountries = createSelector(
  selectCustomFieldsState,
  (state: CustomFieldsState) => state.countries
);

export const selectCustomFieldsLoading = createSelector(
  selectCustomFieldsState,
  (state: CustomFieldsState) => state.loading
);

export const selectCustomFieldsError = createSelector(
  selectCustomFieldsState,
  (state: CustomFieldsState) => state.error
);

export const selectCities = (country: string) => createSelector(
  selectCustomFieldsState,
  (state: CustomFieldsState) => {
    if (!country) return [];
    const selectedCountry = state.countries.find(c => c.country === country);
    return selectedCountry?.cities || [];
  }
);

export const customFieldsViewModel = createSelector(
  selectCountries,
  selectCustomFieldsLoading,
  selectCustomFieldsError,
  (countries, loading, error) => ({
    countries,
    loading,
    error,
  })
);
