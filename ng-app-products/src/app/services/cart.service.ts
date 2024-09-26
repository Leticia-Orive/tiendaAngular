import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  constructor() { }

  // Añadir producto al carrito
  addToCart(product: any) {
    this.cartItems.push(product);
  }

  // Obtener todos los productos del carrito
  getCartItems() {
    return this.cartItems;
  }

  // Eliminar un producto del carrito
  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
  }

  // Vaciar carrito
  clearCart() {
    this.cartItems = [];
  }
}
