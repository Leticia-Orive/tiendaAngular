import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ProductInterface } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit{
  product: any ={};

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    const productId = +(this.route.snapshot.paramMap.get('id') ?? 0);
    if (productId) {
      this.productService.getProductById(productId).subscribe((product) => {
        this.product = product;
      });
    } else {
      console.error('El ID de producto no está disponible o es inválido');
    }
  }

}

