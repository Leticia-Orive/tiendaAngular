import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { AdminGuard } from './auth/admin.guard';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent }, // Ruta de login
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }, // Ruta protegida
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', component: ProductDetailComponent },
    { path: 'cart', component: CartComponent },
    { path: 'contacts', component: ContactListComponent, canActivate: [AuthGuard] },
    { path: 'contacts/new', component: ContactFormComponent, canActivate: [AdminGuard] },
    { path: 'contacts/edit/:id', component: ContactFormComponent, canActivate: [AdminGuard] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' },
    { path: 'register', component: RegisterComponent },
];
