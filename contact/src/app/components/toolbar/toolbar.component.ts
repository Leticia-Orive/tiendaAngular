import { Component, output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

//Creamos un constante de Material Component para poder usarlo en el template
const MATERIAL_MODULES = [MatToolbarModule, MatIconModule, MatButtonModule];
@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MATERIAL_MODULES],
  template: `
    <mat-toolbar color="accent">
      <a mat-button routerLink="/">
        <mat-icon>home</mat-icon>
        <span>Home</span>
      </a>
      <a mat-button routerLink="/contacts">
        <mat-icon>list_alt</mat-icon>
        <span>Contacts</span>
      </a>
      <span class="spacer"></span>
      <a mat-button (click)="emitClick()">
        <mat-icon>add_box</mat-icon>
        <span>New</span>
      </a>
    </mat-toolbar>
  `,
 
})
export class ToolbarComponent {
  onNewContactEvent = output<void>();

  emitClick():void {
    this.onNewContactEvent.emit();
  }

}
