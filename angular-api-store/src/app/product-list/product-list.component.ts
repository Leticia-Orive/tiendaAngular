import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,MatTableModule,RouterModule,HttpClientModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  products: any[] = [];

  constructor(private apiService: ApiService, private dialog: MatDialog, private cartService: CartService, private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.apiService.getProducts().subscribe(data => {
      this.products = data; // Asegúrate de que 'data' sea un array
    }, error => {
      console.error('Error fetching products', error);
    });
  }

  openDialog(product: any): void {
    this.dialog.open(ProductDetailComponent, {
      data: product
    });
  }
   // Función para añadir un producto al carrito
   addToCart(product: any) {
    this.cartService.addToCart(product);
    alert('Producto añadido al carrito');
  }
  // Editar producto
  editProduct(product: any): void {
    this.router.navigate(['/products/edit', product.id]);
  }

  // Borrar producto
  deleteProduct(productId: string): void {
    this.productService.deleteProduct(productId).subscribe(() => {
      this.products = this.products.filter(product => product.id !== productId);
      alert('Producto eliminado');
    });
  }
}
