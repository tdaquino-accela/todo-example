import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyForm } from '@ngx-formly/core';
import { customFieldsViewModel } from '../custom-fields.selector';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { CustomFieldsService } from '../custom-fields.service';
import { CustomFieldsFormModel } from '../custom-fields.model';

@Component({
  selector: 'app-custom-fields',
  templateUrl: './custom-fields-container.component.html',
  styleUrl: './custom-fields-container.component.scss',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormlyForm],
})
export class CustomFieldsContainerComponent implements OnInit{
  private store = inject(Store);
  private customFieldsService = inject(CustomFieldsService);
  fetchFormFields$!: Observable<CustomFieldsFormModel>;
  customFieldsViewModel$ = this.store.select(customFieldsViewModel);

  ngOnInit(): void {
    this.fetchFormFields$ = this.customFieldsService.loadForm().pipe(
      tap((formModel) => {
        console.log('Loaded form model:', formModel);
      })
    );
  }

  form$ = new FormGroup({});
  model$ = { acceptTerms: false };

  onSubmit(model: any) {
    console.log(model);
  }
}
