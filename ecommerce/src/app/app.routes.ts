import { Routes } from '@angular/router';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductListComponent } from './components/product-list/product-list.component';

export const routes: Routes = [
    { path: 'products', component: ProductListComponent },
  { path: 'add-product', component: ProductAddComponent },
];
