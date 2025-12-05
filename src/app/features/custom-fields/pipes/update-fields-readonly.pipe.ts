import { Pipe, PipeTransform } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Pipe({
  name: 'updateFieldsReadonly',
  standalone: true
})
export class UpdateFieldsReadonlyPipe implements PipeTransform {
  transform(fields: FormlyFieldConfig[] | null | undefined, isEditMode: boolean): FormlyFieldConfig[] {
    if (!fields) return [];

    return fields.map(field => this.updateFieldReadonly(field, isEditMode));
  }

  private updateFieldReadonly(field: FormlyFieldConfig, isEditMode: boolean): FormlyFieldConfig {
    return {
      ...field,
      props: {
        ...field.props,
        disabled: !isEditMode
      },
      fieldGroup: field.fieldGroup
        ? field.fieldGroup.map(f => this.updateFieldReadonly(f, isEditMode))
        : undefined
    };
  }
}
