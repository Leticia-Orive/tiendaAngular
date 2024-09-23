import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'contacts', component: ContactListComponent },
  { path: 'contacts/new', component: ContactFormComponent },
  { path: 'contacts/edit/:id', component: ContactFormComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
  { path: 'contacts/new', component: ContactFormComponent, canActivate: [AuthGuard] }, // Ruta para añadir un nuevo contacto
{ path: 'contacts/edit/:id', component: ContactFormComponent, canActivate: [AuthGuard] }, // Ruta para editar un contacto existente
];
