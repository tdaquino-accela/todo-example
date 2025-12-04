import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'custom-advanced-settings',
  template: `
    <div class="advanced-settings text-white dark:text-black">
      <h3>{{ to.label }}</h3>
      <p>Here you can configure advanced settings for your form.</p>
      <div class="setting">
        <label>
          <input type="checkbox" [(ngModel)]="model.enableFeatureX" />
            Enable Feature X
        </label>
      </div>
    </div>
  `,
  styles: [
    `
      .advanced-settings {
        border: 1px solid #ccc;
        padding: 16px;
        border-radius: 4px;
        background-color: #f9f9f9;
      }
      .setting {
        margin-top: 12px;
      }
    `,
  ],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class CustomAdvancedSettingsComponent extends FieldType<FieldTypeConfig> {}
