import { FormlyFieldConfig } from '@ngx-formly/core';
import {
  CustomFieldsBackendModel,
  CustomFieldsFormModel,
} from './custom-fields.model';

export function mapBackendDataToForm(data: CustomFieldsBackendModel): CustomFieldsFormModel {
  console.log('Mapping backend data to form model:', data);
  if (!data || !data.result || data.result.length === 0) {
    return {
      fields: [],
    };
  }

  const fieldsBySection: FormlyFieldConfig[] = data.result.map((section) => ({
    key: section.id.replace(/\s+/g, '_').toLowerCase(),
    wrappers: ['section'],
    props: {
      label: section.text,
    },
    fieldGroup: section.fields
      .sort((a, b) => a.displayOrder - b.displayOrder)
      .map((field) => mapFieldToFormField(field)),
  }));

  console.log('Mapped fields by section:', fieldsBySection);

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
      required: field.isRequired === 'Y' || field.isRequired === true,
      readonly: field.isReadonly === 'Y' || field.isReadonly === true,
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
      maxLength: field.maxLength || undefined,
    },
    fieldArray: field.fieldType === 'Repeat' ? {
      type: 'input',
      props: {
        label: 'Item',
      },
    } : undefined,
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
    Repeat: 'repeat',
    'File-Upload': 'file-upload',
  };

  return typeMap[fieldType] || 'input';
}
