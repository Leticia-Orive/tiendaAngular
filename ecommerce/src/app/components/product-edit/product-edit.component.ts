import { Component } from '@angular/core';
import { ActivatedRoute,Router  } from '@angular/router';

import { Product } from '../../interfaces/product.model';
import { ApiService } from '../../services/api.service';
import { MaterialModule } from '../../models/materialModule';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [MaterialModule, FormsModule, CommonModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.scss'
})
export class ProductEditComponent {
  product: Product | undefined ;
  productForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.productForm = this.fb.group({
      name: [''],
      price: ['']
    });
  }

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.apiService.getProduct(productId).subscribe((data) => {
      this.product = data;
    });
  }

  saveProduct(): void {
    if (this.product) {
      this.apiService.updateProduct(this.product).subscribe(() => {
        this.router.navigate(['/products']); // Redirigir después de guardar
      });
    } else {
      console.error('Product is undefined. Cannot save.');
    }
  }

}
