import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { MatTableModule } from '@angular/material/table';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
const MATERIAL_MODULES = [MatTableModule];
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MATERIAL_MODULES],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title','description','price', 'image', 'actions'];

  constructor(private http: HttpClient, private dialog: MatDialog, private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data; // Asignar los datos al array de productos
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
  viewProduct(product: any) {
    this.dialog.open(ProductDetailsComponent, {
      data: product
    });
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id);
  }

}
