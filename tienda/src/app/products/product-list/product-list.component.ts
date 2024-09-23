import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProductDetailComponent } from '../../product-detail/product-detail.component';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from '../../cart.service';

const MATERIAL_MODULE= [MatTableModule,MatButtonModule,MatDialogModule]
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,MATERIAL_MODULE],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private apiService: ApiService, private dialog: MatDialog, private cartService: CartService) {}

  ngOnInit() {
    this.apiService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
  // Método para abrir el diálogo
    openDialog(product: any): void {
      const dialogRef = this.dialog.open(ProductDetailComponent, {
        width: '250px',
        data: product
      });
    }
  // Método para editar el producto
    editProduct(product: any) {
      // Implementa la lógica para editar el producto
    }

// Método para borrar el producto
    deleteProduct(productId: number) {
      // Implementa la lógica para borrar el producto
    }
    addToCart(product: any) {
      this.cartService.addToCart(product);
      alert(`${product.title} ha sido añadido al carrito!`);
    }
  }
