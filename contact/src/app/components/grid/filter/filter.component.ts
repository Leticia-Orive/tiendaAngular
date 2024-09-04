import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatLabel, MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
const MATERIAL_MODULES = [MatLabel, MatFormField, MatInput] ;
@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [MATERIAL_MODULES, FormsModule],
  template: `
    <mat-form-field>
        <mat-label>{{label()}}</mat-label>
        <input matInput type="text" [(ngModel)]="filter"  [placeholder]="placeholder()">
    </mat-form-field>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent {
  filter = model('');
  label = input<string>('Filter');
  placeholder = input<string>('Ex. name');

}
