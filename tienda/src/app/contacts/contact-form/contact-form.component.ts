import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { ContactService } from '../contact.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent implements OnInit {
  contact: Contact = { id: 0, name: '', email: '' };

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {this.isAdmin = this.authService.isUserAdmin();}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.contact = this.contactService.getContacts().find(c => c.id === +id) || this.contact;
    } else if (!this.isAdmin) {
      // Si no es admin, redirigir o mostrar mensaje
      this.router.navigate(['/contacts']);
    }
  }

  saveContact() {
    if (this.isAdmin) {
      if (this.contact.id) {
        this.contactService.updateContact(this.contact);
      } else {
        this.contactService.addContact(this.contact);
      }
      this.router.navigate(['/contacts']);
    } else {
      alert('No tienes permiso para realizar esta acción.');
    }
  }
    if (this.contact.id) {
      this.contactService.updateContact(this.contact);
    } else {
      this.contactService.addContact(this.contact);
    }
    this.router.navigate(['/contacts']);
  }
}
