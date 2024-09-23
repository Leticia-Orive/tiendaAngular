import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
const MATERIAL_MODULE = [MatTableModule,
    MatButtonModule,
    MatDialogModule]

    @NgModule({
        
        imports: [
          
          MatTableModule,
          MatButtonModule,
          MatDialogModule
        ]
    })