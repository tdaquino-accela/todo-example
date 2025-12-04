import { FormlyFieldConfig } from '@ngx-formly/core';
import {
  CustomFieldsBackendModel,
  CustomFieldsFormModel,
  FieldsBySection,
} from './custom-fields.model';

export function mapBackendDataToForm(data: CustomFieldsBackendModel): CustomFieldsFormModel {
  if (!data || !data.result || data.result.length === 0) {
    return {
      fields: [],
    };
  }

  const fieldsBySection: FieldsBySection[] = data.result.map((section) => ({
    mainSection: section.text,
    fields: section.fields
      .sort((a, b) => a.displayOrder - b.displayOrder)
      .map((field) => mapFieldToFormField(field)),
  }));

  return {
    fields: fieldsBySection,
  };
}

function mapFieldToFormField(field: any): FormlyFieldConfig {
  return {
    id: field.id,
    key: field.id.replace(/\s+/g, '_').toLowerCase(),
    type: mapFieldType(field.fieldType),
    props: {
      required: field.isRequired === 'true' || field.isRequired === true,
      readonly: field.isReadonly === 'true' || field.isReadonly === true,
      label: field.text,
      options:
        field.fieldType === 'DropdownList' && field.options
          ? field.options
          : field.fieldType === 'Radio(Y/N)'
          ? [
              { label: 'Yes', value: true },
              { label: 'No', value: false },
            ]
          : undefined,
      maxLength: field.maxLength || 0,
    },
  };
}

function mapFieldType(fieldType: string): string {
  const typeMap: Record<string, string> = {
    Text: 'input',
    Number: 'input',
    Money: 'input',
    DropdownList: 'select',
    CheckBox: 'checkbox',
    'Radio(Y/N)': 'radio',
    TextArea: 'textarea',
    Date: 'datepicker',
    Time: 'input',
    TimeIsoFormat: 'input',
  };

  return typeMap[fieldType] || 'input';
}
