import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldTypeConfig, FormlyAttributes } from '@ngx-formly/core';
import { FieldType } from '@ngx-formly/material';
import { FileValueAccessor } from '../../../../shared/file-upload/file-upload';

@Component({
  selector: 'formly-file-upload',
  template: `<input class="text-black flex flex-row py-10" type="file" [formControl]="formControl" [formlyAttributes]="field" />`,
  styles: [],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FileValueAccessor, FormlyAttributes],
})
export class FormlyFileUploadComponent extends FieldType<FieldTypeConfig> {}
