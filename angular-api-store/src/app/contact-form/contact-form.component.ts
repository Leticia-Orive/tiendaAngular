import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { MatFormFieldModule } from '@angular/material/form-field';  
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule,MatFormFieldModule,MatInputModule,RouterModule,HttpClientModule, ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent  implements OnInit{
  contactForm!: FormGroup;
  isEditMode = false;
  contactId!: string;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    // Verificar si estamos en modo de edición
    this.contactId = this.route.snapshot.paramMap.get('id')!;
    if (this.contactId) {
      this.isEditMode = true;
      this.contactService.getContactById(this.contactId).subscribe((contact) => {
        this.contactForm.patchValue(contact);
      });
    }
  }

  // Guardar contacto
  saveContact() {
    if (this.contactForm.valid) {
      if (this.isEditMode) {
        this.contactService.updateContact(this.contactId, this.contactForm.value).subscribe(() => {
          alert('Contacto actualizado');
          this.router.navigate(['/contacts']);
        });
      } else {
        this.contactService.addContact(this.contactForm.value).subscribe(() => {
          alert('Contacto añadido');
          this.router.navigate(['/contacts']);
        });
      }
    }
  }

}
