import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

export const routes: Routes = [
    { path: 'products', component: ProductComponent },
  { path: 'products/:id', component: ProductDetailComponent }, // Ruta para ver producto
  { path: 'products/edit/:id', component: ProductFormComponent }, // Ruta para editar producto
  { path: '', redirectTo: '/products', pathMatch: 'full' }, // Redirigir a la lista de productos por defecto
  { path: '**', redirectTo: '/products' }, // Redirigir a la lista de productos si no encuentra la ruta
];
