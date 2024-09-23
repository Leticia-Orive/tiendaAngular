import { CommonModule } from '@angular/common';

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule,MatDialogModule,RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    console.log(this.data);
  }
}
