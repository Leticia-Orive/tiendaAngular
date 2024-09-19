import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { MaterialModules } from '../shared/material-modules';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MaterialModules, CommonModule,],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

}
