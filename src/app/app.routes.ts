import { Routes } from '@angular/router';
import { TodosContainerComponent } from './features/todos/containers/todos-container.component';

export const routes: Routes = [
  { path: 'todos', component: TodosContainerComponent },
  { 
    path: 'users', loadChildren: () => import('./features/users/users.routes')
  },
  { path: 'custom-fields', loadChildren: () => import('./features/custom-fields/custom-fields.routes') },
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
];