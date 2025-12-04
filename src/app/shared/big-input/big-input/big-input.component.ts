import { CommonModule } from '@angular/common';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';

@Component({
  selector: 'anms-big-input',
  templateUrl: './big-input.component.html',
  styleUrls: ['./big-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, MatCardModule, StoreModule],
})
export class BigInputComponent {
  @Input()
  placeholder = '';

  @Input()
  value = '';

  @Input()
  disabled = false;

  hasFocus = false;
}
