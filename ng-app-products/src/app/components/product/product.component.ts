import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductInterface } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})

export class ProductComponent implements OnInit {
  products: ProductInterface[] = [];

  constructor(private productService: ProductService,private cartService: CartService,private router: Router) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
  // Ver un producto
  viewProduct(id: number): void {
    this.router.navigate(['/products', id]);  // Navegar a la página de detalles del producto
  }

  // Editar un producto
  editProduct(id: number): void {
    this.router.navigate(['/products/edit', id]);  // Navegar al formulario de edición de producto
  }

  // Borrar un producto
  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(product => product.id !== id);
      alert('Producto eliminado');
    });
  }

  // Añadir producto al carrito
  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert('Producto añadido al carrito');
  }
}
