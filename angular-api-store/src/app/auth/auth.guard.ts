import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = this.authService.isAuthenticated(); // Método que verifica si el usuario está autenticado
    if (isAuthenticated) {
      return true; // Permite el acceso a la ruta
    } else {
      this.router.navigate(['/login']); // Redirige a la página de login
      return false; // Bloquea el acceso
    }
  }
}
