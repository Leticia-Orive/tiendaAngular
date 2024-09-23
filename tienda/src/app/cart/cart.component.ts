import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
const MATERIAL_MODULE= [MatTableModule,]
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, MATERIAL_MODULE],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  items: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
    this.items = this.cartService.getItems(); // Actualiza la lista de items
  }

  clearCart() {
    this.cartService.clearCart();
    this.items = []; // Actualiza la lista de items
  }
}
