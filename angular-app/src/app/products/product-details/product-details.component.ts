import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'] 
})
export class ProductDetailsComponent {
  // Inyectar MatDialogRef directamente en el constructor
  constructor(
    public dialogRef: MatDialogRef<ProductDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  // Función para cerrar el modal
  close(): void {
    this.dialogRef.close();
  }
}