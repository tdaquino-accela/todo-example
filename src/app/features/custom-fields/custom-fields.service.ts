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
    {
      id: 'BLDG_COM_NEW-TEST',
      text: 'Field Testing Section',
      displayOrder: 190,
      fields: [
        {
          id: 'Repeat Section',
          text: 'Repeat Section',
          isReadonly: 'N',
          fieldType: 'Repeat',
          maxLength: 0,
          isRequired: 'N',
          displayOrder: 30,
        },
        {
          id: 'File Upload',
          text: 'File Upload',
          isReadonly: 'N',
          fieldType: 'File-Upload',
          maxLength: 0,
          isRequired: 'N',
          displayOrder: 1,
        },
      ],
      alias: {
        value: 'Field Testing Section',
        text: 'Field Testing Section',
      },
      subgroup: {
        value: 'FIELD TESTING SECTION',
        text: 'FIELD TESTING SECTION',
      },
    },
  ],
};

export const BE_TABLE_DATA = {
  status: 200,
  result: [
    {
      id: 'BLDG_COM_NEW-OCCUPANCY.cTYPE',
      text: 'Occupancy Type',
      displayOrder: 10,
      fields: [
        {
          id: 'Occupancy',
          text: 'Occupancy',
          isReadonly: 'N',
          fieldType: 'DropdownList',
          maxLength: 240,
          isRequired: 'Y',
          displayOrder: 10,
          options: [
            {
              value: 'A-1 Assembly (Theaters, etc.)',
              text: 'A-1 Assembly (Theaters, etc.)',
            },
            {
              value: 'A-2 Assembly (Nightclubs, Restaurants, etc.)',
              text: 'A-2 Assembly (Nightclubs, Restaurants, etc.)',
            },
            {
              value: 'A-3 Assembly (Courtrooms, Churches, Libraries, etc.)',
              text: 'A-3 Assembly (Courtrooms, Churches, Libraries, etc.)',
            },
            {
              value: 'A-4 Assembly (Indoor Sports, etc.)',
              text: 'A-4 Assembly (Indoor Sports, etc.)',
            },
            {
              value: 'A-5 Assembly (Outdoor Sports, etc.)',
              text: 'A-5 Assembly (Outdoor Sports, etc.)',
            },
            {
              value: 'B Business (Offices, Banks, Barbershops, etc.)',
              text: 'B Business (Offices, Banks, Barbershops, etc.)',
            },
            {
              value: 'E Educational (Schools, Child Care, etc.)',
              text: 'E Educational (Schools, Child Care, etc.)',
            },
            {
              value: 'F-1 Factory Moderate Hazard (Appliances, Automobiles, etc.)',
              text: 'F-1 Factory Moderate Hazard (Appliances, Automobiles, etc.)',
            },
            {
              value: 'F-2 Factory Low Hazard (Beverages, Glass, etc.)',
              text: 'F-2 Factory Low Hazard (Beverages, Glass, etc.)',
            },
            {
              value: 'FOT Foundation Only - Other',
              text: 'FOT Foundation Only - Other',
            },
            {
              value: 'FSF Foundation Only - Single Family',
              text: 'FSF Foundation Only - Single Family',
            },
            {
              value: 'H-1 High Hazard 1 (Denotation)',
              text: 'H-1 High Hazard 1 (Denotation)',
            },
            {
              value: 'H-2 High Hazard 2 (Deflagration)',
              text: 'H-2 High Hazard 2 (Deflagration)',
            },
            {
              value: 'H-3 High Hazard 3 (Combustion)',
              text: 'H-3 High Hazard 3 (Combustion)',
            },
            {
              value: 'H-4 High Hazard 4 (Health Hazard)',
              text: 'H-4 High Hazard 4 (Health Hazard)',
            },
            {
              value: 'H-5 High Hazard 5 (Hazardous Production Materials)',
              text: 'H-5 High Hazard 5 (Hazardous Production Materials)',
            },
            {
              value: 'I-1 Institutional (Assisted Living, Convalescent facilities, etc.)',
              text: 'I-1 Institutional (Assisted Living, Convalescent facilities, etc.)',
            },
            {
              value: 'I-2 Institutional (Hospital, Nursing Homes, etc.)',
              text: 'I-2 Institutional (Hospital, Nursing Homes, etc.)',
            },
            {
              value: 'I-3 Institutional (Prisons, Detention, etc.)',
              text: 'I-3 Institutional (Prisons, Detention, etc.)',
            },
            {
              value: 'M Mercantile (Department Store, Drug Store, etc.)',
              text: 'M Mercantile (Department Store, Drug Store, etc.)',
            },
            {
              value: 'R-1 Residential (Hotels, Motels, etc.)',
              text: 'R-1 Residential (Hotels, Motels, etc.)',
            },
            {
              value: 'R-2A Residential (Apartment, Dormatories, etc.)',
              text: 'R-2A Residential (Apartment, Dormatories, etc.)',
            },
            {
              value: 'R-2C Residential (Condominiums)',
              text: 'R-2C Residential (Condominiums)',
            },
            {
              value: 'R-2P Residential (Patio Homes)',
              text: 'R-2P Residential (Patio Homes)',
            },
            {
              value: 'R-3 Residential (One or Two Family Dwelling)',
              text: 'R-3 Residential (One or Two Family Dwelling)',
            },
            {
              value: 'R-4 Residential (Assisted Living, Group Home, etc.)',
              text: 'R-4 Residential (Assisted Living, Group Home, etc.)',
            },
            {
              value: 'S-1 Storage - Moderate Hazard',
              text: 'S-1 Storage - Moderate Hazard',
            },
            {
              value: 'S-2 Storage - Low Hazard',
              text: 'S-2 Storage - Low Hazard',
            },
            {
              value: 'U Utility - Miscellaneous',
              text: 'U Utility - Miscellaneous',
            },
            {
              value: 'U-A Utility - Accessory Strucutre',
              text: 'U-A Utility - Accessory Strucutre',
            },
            {
              value: 'U-G Utility - Single Family Garage',
              text: 'U-G Utility - Single Family Garage',
            },
            {
              value: 'U-S Utility - Swimming Pool',
              text: 'U-S Utility - Swimming Pool',
            },
          ],
        },
        {
          id: 'Area (Sq. Ft)',
          text: 'Area (Sq. Ft)',
          isReadonly: 'N',
          fieldType: 'Number',
          maxLength: 240,
          isRequired: 'N',
          displayOrder: 20,
        },
      ],
      alias: {
        value: 'Occupancy Type',
        text: 'Occupancy Type',
      },
      subgroup: {
        value: 'OCCUPANCY TYPE',
        text: 'OCCUPANCY TYPE',
      },
    },
    {
      id: 'BLDG_COM_NEW-CONSTRUCTION.cTYPE',
      text: 'Construction Type',
      displayOrder: 20,
      fields: [
        {
          id: 'Text',
          text: 'Text',
          isReadonly: 'N',
          fieldType: 'Text',
          maxLength: 240,
          isRequired: 'N',
          displayOrder: 3,
        },
        {
          id: 'Area (Sq. Ft)',
          text: 'Area (Sq. Ft)',
          isReadonly: 'N',
          fieldType: 'Number',
          maxLength: 240,
          isRequired: 'N',
          displayOrder: 20,
        },
        {
          id: 'Construction Type',
          text: 'Construction Type',
          isReadonly: 'N',
          fieldType: 'DropdownList',
          maxLength: 240,
          isRequired: 'Y',
          displayOrder: 10,
          options: [
            {
              value: 'Type I A - Non Combustible (Protected Structural Elements) 3HR',
              text: 'Type I A - Non Combustible (Protected Structural Elements) 3HR',
            },
            {
              value: 'Type I B - Non Combustible (Rated Structural Elements) 2HR',
              text: 'Type I B - Non Combustible (Rated Structural Elements) 2HR',
            },
            {
              value: 'Type II A - Non Combustible (Rated Structural Elements) 1HR',
              text: 'Type II A - Non Combustible (Rated Structural Elements) 1HR',
            },
            {
              value: 'Type II B - Non Combustible (Non-Rated Structural Elements)',
              text: 'Type II B - Non Combustible (Non-Rated Structural Elements)',
            },
            {
              value: 'Type III A - Non Combustibles (Exterior Walls Only)',
              text: 'Type III A - Non Combustibles (Exterior Walls Only)',
            },
            {
              value: 'Type III B - Non Combustible (Bearing Walls Rated)',
              text: 'Type III B - Non Combustible (Bearing Walls Rated)',
            },
            {
              value: 'Type IV - Heavy Timber',
              text: 'Type IV - Heavy Timber',
            },
            {
              value: 'Type V A - Combustible (Structural Elements Rated) 1HR',
              text: 'Type V A - Combustible (Structural Elements Rated) 1HR',
            },
            {
              value: 'Type V B - Combustible (All Elements Not Rated)',
              text: 'Type V B - Combustible (All Elements Not Rated)',
            },
            {
              value: 'Unknown',
              text: 'Unknown',
            },
            {
              value: 'Not Applicable',
              text: 'Not Applicable',
            },
          ],
        },
      ],
      alias: {
        value: 'Construction Type',
        text: 'Construction Type',
      },
      subgroup: {
        value: 'CONSTRUCTION TYPE',
        text: 'CONSTRUCTION TYPE',
      },
    },
  ],
};
