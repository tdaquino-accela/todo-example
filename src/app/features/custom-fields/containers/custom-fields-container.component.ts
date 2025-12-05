import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyForm } from '@ngx-formly/core';
import { customFieldsViewModel } from '../custom-fields.selector';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { CustomFieldsService } from '../custom-fields.service';
import { CustomFieldsFormModel } from '../custom-fields.model';
import { UpdateFieldsReadonlyPipe } from '../pipes/update-fields-readonly.pipe';

@Component({
  selector: 'app-custom-fields',
  templateUrl: './custom-fields-container.component.html',
  styleUrl: './custom-fields-container.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyForm,
    UpdateFieldsReadonlyPipe
  ],
})
export class CustomFieldsContainerComponent implements OnInit{
  private store = inject(Store);
  private customFieldsService = inject(CustomFieldsService);
  fetchFormFields$!: Observable<CustomFieldsFormModel>;
  customFieldsViewModel$ = this.store.select(customFieldsViewModel);
  form$ = new FormGroup({});
  model$ = {};
  isEditMode = false;

  ngOnInit(): void {
    this.fetchFormFields$ = this.customFieldsService.loadForm().pipe(
      tap((formModel) => {
        console.log('Loaded form model:', formModel);
      })
    );
  }

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  onSubmit(model: any) {
    console.log('Form submitted with nested model:', model);
    this.toggleEditMode();
  }
}
