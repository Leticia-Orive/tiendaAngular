import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAdmin = false; // Cambiar según el tipo de usuario

  login(isAdmin: boolean) {
    this.isAdmin = isAdmin;
  }

  logout() {
    this.isAdmin = false;
  }

  isUserAdmin() {
    return this.isAdmin;
  }

  constructor() { }
}
