import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent implements OnInit{
  productForm: FormGroup;
  productId: number = 0;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Get the id from the route parameters
    if (id) { // Check if id is not null or undefined
      this.productId = +id; // Convert the id to a number
      if (this.productId) { // Check if productId is a valid number
        this.productService.getProductById(this.productId).subscribe((product) => {
          this.productForm.patchValue(product);
        }, (error) => {
          console.error('Error fetching product:', error); // Handle any errors from the service
        });
      } else {
        console.error('Invalid product ID:', id); // Log if the ID was not valid
      }
    } else {
      console.error('Product ID not found in the route parameters.');
    }
  }
  

  onSubmit(): void {
    if (this.productForm.valid) {
      if (this.productId) {
        this.productService.updateProduct(this.productId, this.productForm.value).subscribe(() => {
          alert('Producto actualizado');
          this.router.navigate(['/products']);
        });
      } else {
        this.productService.addProduct(this.productForm.value).subscribe(() => {
          alert('Producto añadido');
          this.router.navigate(['/products']);
        });
      }
    }
  }
}
