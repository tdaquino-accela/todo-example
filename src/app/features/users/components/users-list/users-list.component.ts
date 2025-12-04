import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../users.model';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'anms-users-list',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './users-list.component.html',
})
export class UsersListComponent {
  public readonly users = input<User[] | undefined>([]);
  public readonly onUserClick = output<string>();
}
