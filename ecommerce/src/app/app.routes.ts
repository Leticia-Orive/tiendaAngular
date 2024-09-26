import { Routes } from '@angular/router';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductViewComponent } from './components/product-view/product-view.component';

export const routes: Routes = [
    { path: 'products', component: ProductListComponent },
  { path: 'add-product', component: ProductAddComponent },
  { path: 'product/:id', component: ProductViewComponent }, // Ruta para ver el producto
  { path: 'edit-product/:id', component: ProductEditComponent }, // Ruta para editar el producto
];
