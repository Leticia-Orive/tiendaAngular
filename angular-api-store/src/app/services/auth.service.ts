import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: any = null;
  private users: { username: string, password: string }[] = []; // Lista de usuarios registrados
  constructor(private router: Router) { }
    // Método para registrar un nuevo usuario
  register(username: string, password: string): boolean {
    // Verificamos si el usuario ya existe
    const userExists = this.users.some(user => user.username === username);
    
    if (userExists) {
      return false; // Usuario ya existe, no permitir registro
    }

    // Agregamos el nuevo usuario al array
    this.users.push({ username, password });
    
    return true; // Registro exitoso
  }
  // Simular login con un rol
  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      this.currentUser = { username, role: 'admin' }; // Usuario admin
    } else if (username === 'user' && password === 'user') {
      this.currentUser = { username, role: 'user' }; // Usuario normal
    } else {
      return false;
    }

    return true;
  }

  // Obtener el usuario actual
  getCurrentUser() {
    return this.currentUser;
  }

  // Verificar si el usuario es admin
  isAdmin(): boolean {
    return this.currentUser?.role === 'admin';
  }

  // Verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  // Cerrar sesión
  logout() {
    this.currentUser = null;
    this.router.navigate(['/login']);
  }
}
