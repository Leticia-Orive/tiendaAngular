import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = [];

  constructor() {}

  // Agregar un producto al carrito
  addToCart(product: any) {
    this.items.push(product);
  }

  // Obtener los productos en el carrito
  getItems() {
    return this.items;
  }

  // Vaciar el carrito
  clearCart() {
    this.items = [];
    return this.items;
  }
}
