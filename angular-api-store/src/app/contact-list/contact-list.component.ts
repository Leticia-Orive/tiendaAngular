import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [MatTableModule,RouterModule,HttpClientModule,],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit{
  contacts: any[] = [];

  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit(): void {
    this.contactService.getContacts().subscribe((data) => {
      this.contacts = data;
    });
  }

  // Borrar contacto
  deleteContact(id: string) {
    this.contactService.deleteContact(id).subscribe(() => {
      this.contacts = this.contacts.filter(contact => contact.id !== id);
      alert('Contacto eliminado');
    });
  }

  // Editar contacto
  editContact(id: string) {
    this.router.navigate(['/contacts/edit', id]);
  }

}
