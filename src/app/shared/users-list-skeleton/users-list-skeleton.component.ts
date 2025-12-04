import { Component, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: "anms-users-list-skeleton",
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: "./users-list-skeleton.component.html",
})
export class UsersListSkeletonComponent {
  public readonly loading = input<boolean | undefined>(false);
}