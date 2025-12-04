import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { usersViewModel } from '../users.selector';
import { userSelected } from '../users.actions';
import { UsersListSkeletonComponent } from '../../../shared/users-list-skeleton/users-list-skeleton.component';
import { UsersListComponent } from '../components/users-list/users-list.component';

@Component({
  selector: 'anms-users',
  templateUrl: './users-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    UsersListSkeletonComponent,
    UsersListComponent,
  ],
})
export class UsersContainerComponent {
  private store = inject(Store);
  usersViewModel$ = this.store.select(usersViewModel);

  onUserClick(userId: string) {
    this.store.dispatch(userSelected({ userId }));
  }
}
