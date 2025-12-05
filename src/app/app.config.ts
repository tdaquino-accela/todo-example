import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { provideFormlyCore } from '@ngx-formly/core';
import { withFormlyMaterial } from '@ngx-formly/material';
import { withFormlyFieldDatepicker } from '@ngx-formly/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

import { routes } from './app.routes';
import { TodosEffects } from './features/todos/todos.effects';
import { todosReducer } from './features/todos/todos.reducer';
import { usersReducer } from './features/users/users.reducer';
import { UsersEffects } from './features/users/users.effects';
import { CustomFieldsEffects } from './features/custom-fields/custom-fields.effects';
import { customFieldsReducer } from './features/custom-fields/custom-fields.reducer';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { SectionWrapper } from './features/custom-fields/components/wrappers/section-wrapper.component';
import { FormlyRepeatSectionComponent } from './features/custom-fields/components/customTypes/repeat-section.component';
import { FormlyFileUploadComponent } from './features/custom-fields/components/customTypes/file-upload.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideNativeDateAdapter(),
    provideStore(),
    provideState({
      name: 'todos',
      reducer: todosReducer,
    }),
    provideState({
      name: 'users',
      reducer: usersReducer,
    }),
    provideState({
      name: 'customFields',
      reducer: customFieldsReducer,
    }),
    provideEffects([TodosEffects, UsersEffects, CustomFieldsEffects]),
    provideFormlyCore([
      ...withFormlyMaterial(), 
      withFormlyFieldDatepicker(),
      {
        types: [{
          name: 'repeat',
          component: FormlyRepeatSectionComponent,
        }, {
          name: 'file-upload',
          component: FormlyFileUploadComponent,
          wrappers: ['form-field'],
        }],
        wrappers: [
          { name: 'section', component: SectionWrapper },
        ],
      }
    ]),
    provideIonicAngular({}),
  ],
};
