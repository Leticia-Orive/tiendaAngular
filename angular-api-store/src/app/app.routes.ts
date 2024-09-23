import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', component: ProductDetailComponent },
    { path: 'cart', component: CartComponent },
    { path: 'contacts', component: ContactListComponent },
    { path: 'contacts/new', component: ContactFormComponent },
    { path: 'contacts/edit/:id', component: ContactFormComponent },
    { path: '**', redirectTo: '/home' }
];
