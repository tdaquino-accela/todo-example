import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { Countries, CustomFieldsBackendModel, FetchCountriesResponse } from './custom-fields.model';
import { mapBackendDataToForm } from './custom-fields.mapper';

@Injectable({
  providedIn: 'root',
})
export class CustomFieldsService {
  private readonly apiUrl = 'https://countriesnow.space/api/v0.1/countries';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<FetchCountriesResponse> {
    return this.http.get<FetchCountriesResponse>(this.apiUrl).pipe(
      delay(2000),
      map((response: FetchCountriesResponse) => {
        return {
          ...response,
          countries: response.data.map((country: Countries) => ({
            country: country.country,
            cities: country.cities,
          })),
        };
      })
    );
  }

  loadForm() {
    return of(BE_DATA).pipe(
      delay(1000),
      map((data: CustomFieldsBackendModel) => mapBackendDataToForm(data))
    );
  }
}

const BE_DATA = {
  status: 200,
  result: [
    {
      id: 'BLDG_COM_NEW-GENERAL.cPROJECT.cINFORMATION',
      text: 'General Project Information',
      displayOrder: 10,
      fields: [
        {
          id: 'Number of Units',
          text: 'Number of Units',
          isReadonly: 'N',
          fieldType: 'Number',
          maxLength: 0,
          isRequired: 'N',
          displayOrder: 50,
        },
        {
          id: 'Occupant Load',
          text: 'Occupant Load',
          isReadonly: 'N',
          fieldType: 'Number',
          maxLength: 0,
          isRequired: 'N',
          displayOrder: 60,
        },
        {
          id: 'Does this project include a demolition?',
          text: 'Does this project include a demolition?',
          isReadonly: 'N',
          fieldType: 'Radio(Y/N)',
          maxLength: 0,
          isRequired: 'N',
          displayOrder: 130,
        },
        {
          id: 'Sprinkler System',
          text: 'Sprinkler System',
          isReadonly: 'N',
          fieldType: 'Radio(Y/N)',
          maxLength: 0,
          isRequired: 'Y',
          displayOrder: 75,
        },
        {
          id: 'Work in the right of way?',
          text: 'Work in the right of way?',
          isReadonly: 'N',
          fieldType: 'Radio(Y/N)',
          maxLength: 0,
          isRequired: 'N',
          displayOrder: 140,
        },
        {
          id: 'Building Height (Stories)',
          text: 'Building Height (Stories)',
          isReadonly: 'N',
          fieldType: 'Number',
          maxLength: 0,
          isRequired: 'N',
          displayOrder: 60,
        },
        {
          id: 'Set Back Front',
          text: 'Set Back Front',
          isReadonly: 'N',
          fieldType: 'Number',
          maxLength: 0,
          isRequired: 'N',
          displayOrder: 90,
        },
        {
          id: 'Set Back Right',
          text: 'Set Back Right',
          isReadonly: 'N',
          fieldType: 'Number',
          maxLength: 0,
          isRequired: 'N',
          displayOrder: 120,
        },
        {
          id: 'Total Building Area (Sq. Ft)',
          text: 'Total Building Area (Sq. Ft)',
          isReadonly: 'N',
          fieldType: 'Number',
          maxLength: 0,
          isRequired: 'N',
          displayOrder: 10,
        },
        {
          id: 'Building Height (Ft)',
          text: 'Building Height (Ft)',
          isReadonly: 'N',
          fieldType: 'Number',
          maxLength: 0,
          isRequired: 'N',
          displayOrder: 50,
        },
        {
          id: 'Elevator',
          text: 'Elevator',
          isReadonly: 'N',
          fieldType: 'Radio(Y/N)',
          maxLength: 0,
          isRequired: 'Y',
          displayOrder: 80,
        },
        {
          id: 'Estimated Cost (Job Value)',
          text: 'Estimated Cost (Job Value)',
          isReadonly: 'N',
          fieldType: 'Money',
          maxLength: 0,
          isRequired: 'N',
          displayOrder: 20,
        },
        {
          id: 'Set Back Rear',
          text: 'Set Back Rear',
          isReadonly: 'N',
          fieldType: 'Number',
          maxLength: 0,
          isRequired: 'N',
          displayOrder: 100,
        },
        {
          id: 'Set Back Left',
          text: 'Set Back Left',
          isReadonly: 'N',
          fieldType: 'Number',
          maxLength: 0,
          isRequired: 'N',
          displayOrder: 110,
        },
      ],
      alias: {
        value: 'General Project Information',
        text: 'General Project Information',
      },
      subgroup: {
        value: 'GENERAL PROJECT INFORMATION',
        text: 'GENERAL PROJECT INFORMATION',
      },
    },
    {
      id: 'BLDG_COM_NEW-PERMIT.cDATES',
      text: 'Permit Dates',
      displayOrder: 90,
      fields: [
        {
          id: 'Permit Expiration Date',
          text: 'Permit Expiration Date',
          isReadonly: 'N',
          fieldType: 'Date',
          maxLength: 0,
          isRequired: 'N',
          displayOrder: 30,
        },
        {
          id: 'Application Expiration Date',
          text: 'Application Expiration Date',
          value: '2026-06-01',
          isReadonly: 'N',
          fieldType: 'Date',
          maxLength: 0,
          isRequired: 'N',
          displayOrder: 10,
        },
        {
          id: 'Summary',
          text: 'Summary',
          isReadonly: 'N',
          fieldType: 'Text',
          maxLength: 0,
          isRequired: 'N',
          displayOrder: 1,
        },
        {
          id: 'Permit Issued Date',
          text: 'Permit Issued Date',
          isReadonly: 'N',
          fieldType: 'Date',
          maxLength: 0,
          isRequired: 'N',
          displayOrder: 20,
        },
      ],
      alias: {
        value: 'Permit Dates',
        text: 'Permit Dates',
      },
      subgroup: {
        value: 'PERMIT DATES',
        text: 'PERMIT DATES',
      },
    },
  ],
};
