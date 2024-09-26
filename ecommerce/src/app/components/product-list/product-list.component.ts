import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.model';
import { ApiService } from '../../services/api.service';
import { MaterialModule } from '../../models/materialModule';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{
  products: Product[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  deleteProduct(id: number): void {
    this.apiService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter((product) => product.id !== id);
    });
  }
}
