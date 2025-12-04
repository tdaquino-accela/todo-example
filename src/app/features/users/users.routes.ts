import { Routes } from '@angular/router';
import { UserViewComponent } from './components/user-view/user-view.component';
import { UsersContainerComponent } from './containers/users-container.component';
import { UsersResolver } from './users.resolver';
import { UsersComponent } from './users.component';

export default [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: UsersContainerComponent,
        resolve: { users: UsersResolver },
      },
      {
        path: ':id',
        component: UserViewComponent,
      },
    ],
  },
] as Routes;
