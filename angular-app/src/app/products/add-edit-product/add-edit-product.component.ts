import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css'],
  
  
})
export class AddEditProductComponent {
  productForm: FormGroup;
  isEditMode: boolean;

  constructor(
    public dialogRef: MatDialogRef<AddEditProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private apiService: ApiService
  ) {
    this.isEditMode = data.mode === 'edit';
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      image: ['']
    });

    if (this.isEditMode && data.product) {
      this.productForm.patchValue(data.product);
    }
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      if (this.isEditMode) {
        this.apiService.updateProduct(this.data.product.id, productData).subscribe(() => {
          this.dialogRef.close(true); // Cierra el modal y refresca la lista de productos
        });
      } else {
        this.apiService.addProduct(productData).subscribe(() => {
          this.dialogRef.close(true);
        });
      }
    }
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
