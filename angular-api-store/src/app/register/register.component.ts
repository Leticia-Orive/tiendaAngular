import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators,  ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  registrationSuccess = false;
  registrationError = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const { username, password } = this.registerForm.value;
      const success = this.authService.register(username, password);
      if (success) {
        this.registrationSuccess = true;
        this.registrationError = false;
      } else {
        this.registrationError = true;
        this.registrationSuccess = false;
      }
    }
  }
}
