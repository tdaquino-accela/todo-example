import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FieldArrayType, FormlyField } from '@ngx-formly/core';

@Component({
  selector: 'formly-repeat-section',
  template: `
    <div class="mb-3">
      @if (props.label) {
      <hr class="bg-indigo-900 h-1 my-4" />
      <legend class="w-full h-4 text-black py-4 px-2 font-semibold flex items-center mb-4">
        {{ props.label }}
      </legend>
      } @if (props.description) {
      <p class="text-sm italic text-gray-600 mb-2">
        {{ props.description }}
      </p>
      } @for(field of field.fieldGroup || []; track i; let i = $index) {
      <div class="flex flex-row items-baseline">
        <div class="flex-1">
          <formly-field [field]="field"></formly-field>
        </div>
        <button
          mat-mini-fab
          class="bg-red-900 flex items-center justify-center w-1/12 h-10 mr-2 rounded-r disabled:bg-slate-300"
          (click)="remove(i)"
          [disabled]="props.disabled"
        >
          <mat-icon class="material-icons-outlined !text-red-100">delete</mat-icon>
        </button>
      </div>
      }
      <div class="flex w-full justify-center items-center">
        <button
          type="button"
          class="mt-2 bg-green-600 text-white rounded px-4 py-2 h-10 disabled:bg-slate-300"
          (click)="add()"
          [disabled]="props.disabled"
        >
          Add {{ props.label }}
        </button>
      </div>
      <hr class="bg-indigo-900 h-1 my-4" />
    </div>
  `,
  styles: [],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FormlyField, MatIconModule],
})
export class FormlyRepeatSectionComponent extends FieldArrayType {}
