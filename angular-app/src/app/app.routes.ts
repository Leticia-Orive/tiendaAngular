import { Routes } from '@angular/router';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ContactFormComponent } from './contacts/contact-form/contact-form.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Ruta para la página de inicio
  { path: 'products', component: ProductListComponent }, // Página de productos
  { path: 'contacts', component: ContactListComponent }, // Página de lista de contactos
  { path: 'contacts/new', component: ContactFormComponent }, // Añadir un nuevo contacto
  { path: 'contacts/edit/:id', component: ContactFormComponent }, // Editar un contacto
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirigir a la página de inicio por defecto
  { path: '**', redirectTo: '/products' }, // Redirigir a productos si la ruta no existe
  { path: 'cart', component: CartComponent }, // Ruta para el carrito
];
