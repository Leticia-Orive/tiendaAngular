import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../services/product.service'; // Ajusta la ruta según tu estructura

import { MaterialModules } from '../shared/material-modules';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone: true, 
  imports: [MaterialModules,],
    
      
  
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'price', 'actions'];

  constructor(private productService: ProductService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getProducts().subscribe(
      data => {
        this.products = data;
      },
      error => {
        console.error('Error fetching products', error);
      }
    );
  }

  openAddProductModal() {
    // Abre el modal para añadir un producto
  }

  openEditProductModal(product: any) {
    // Abre el modal para editar el producto
  }

  deleteProduct(productId: number) {
    this.productService.deleteProduct(productId).subscribe(
      () => {
        this.fetchProducts(); // Refrescar la lista después de eliminar
      },
      error => {
        console.error('Error deleting product', error);
      }
    );
  }
}

