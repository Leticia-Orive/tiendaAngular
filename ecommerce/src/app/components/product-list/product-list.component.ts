import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.model';
import { ApiService } from '../../services/api.service';
import { MaterialModule } from '../../models/materialModule';
import { Router } from '@angular/router'; // Importa Router si quieres redirigir

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{
  products: Product[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
  viewProduct(id: number): void {
    // Por ejemplo, redirigir a la página de detalles del producto
    this.router.navigate(['/product', id]);
    
    // O si estás usando un modal, puedes abrirlo aquí
    // this.openProductModal(id);
  }

  // Si decides usar un modal, puedes implementar un método como este:
  // openProductModal(id: number): void {
  //   // Lógica para abrir un modal
  // }

  // Agrega el método editProduct
  editProduct(id: number): void {
    // Redirigir a la página de edición del producto
    this.router.navigate(['/edit-product', id]);
  }
  deleteProduct(id: number): void {
    this.apiService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter((product) => product.id !== id);
    });
  }
}
