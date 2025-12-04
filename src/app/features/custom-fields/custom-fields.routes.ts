import { Routes } from '@angular/router';
import { CustomFieldsComponent } from './custom-fields.component';
import { CustomFieldsContainerComponent } from './containers/custom-fields-container.component';
import { CustomFieldsResolver } from './custom-fields.resolver';

export default [
  {
    path: '',
    component: CustomFieldsComponent,
    children: [
      {
        path: '',
        component: CustomFieldsContainerComponent,
        resolve: {
          customFields: CustomFieldsResolver
        }
      },
    ],
  },
] as Routes;
