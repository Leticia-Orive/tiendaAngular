import { Component, OnInit } from '@angular/core';
import { MaterialModules } from '../shared/material-modules';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialModules, CommonModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  
})
export class HomeComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService,private cartService: CartService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(
      (data: any) => {
        this.products = data.slice(0, 5); // Mostrar solo algunos productos
      },
      (error) => {
        console.error('Error al cargar los productos', error);
      }
    );
  }
  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }

}
