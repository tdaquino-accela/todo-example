import { FormlyFieldConfig } from '@ngx-formly/core';
export interface Countries {
  country: string;
  cities: string[];
}

export interface FetchCountriesResponse {
  error: boolean;
  msg: string;
  data: Countries[];
}

export interface CustomFieldsBackendModel {
    status: number;
    result: CustomFieldSection[];
}

export interface CustomFieldSection {
    id: string;
    text: string;
    displayOrder: number;
    fields: CustomField[];
}

export interface CustomField {
    id: string;
    text: string;
    isReadonly: string;
    fieldType: string;
    maxLength: number;
    isRequired: string;
    displayOrder: number;
}

export interface CustomFieldsFormModel {
    fields: FormlyFieldConfig[];
    hooks?: {
        onInit?: (formlyForm: any) => void;
    };
}
