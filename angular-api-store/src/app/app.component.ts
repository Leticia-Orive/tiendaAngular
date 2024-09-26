import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatToolbarModule,CommonModule, RouterModule,HttpClientModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-api-store';

  constructor(public authService: AuthService,public router: Router) {}

  // Método para cerrar sesión
  logout() {
    this.authService.logout();
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
  
}
