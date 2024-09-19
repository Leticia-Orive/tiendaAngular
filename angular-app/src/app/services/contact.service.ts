import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contacts: Contact[] = [];

  constructor(private http: HttpClient) {
    this.contacts = [
      { id: 1, name: 'Juan Pérez', email: 'juan.perez@example.com', phone: '123456789' },
      { id: 2, name: 'Ana Gómez', email: 'ana.gomez@example.com', phone: '987654321' }
    ];
  }

  // Obtiene todos los contactos
  getContacts(): Observable<Contact[]> {
    // Si usas API:
    // return this.http.get<Contact[]>('URL_DE_TU_API/contactos');
    
    // Datos locales por ahora
    return of(this.contacts);
  }

  // Añadir contacto
  addContact(contact: Contact): Observable<Contact> {
    contact.id = this.contacts.length + 1; // Generar ID para el nuevo contacto
    this.contacts.push(contact);
    return of(contact);
  }

  // Actualizar contacto
  updateContact(contact: Contact): Observable<Contact> {
    const index = this.contacts.findIndex(c => c.id === contact.id);
    if (index !== -1) {
      this.contacts[index] = contact;
    }
    return of(contact);
  }

  // Borrar contacto
  deleteContact(id: number): Observable<void> {
    this.contacts = this.contacts.filter(c => c.id !== id);
    return of();
  }

  // Obtener contacto por ID (para editar)
  getContactById(id: number): Observable<Contact> {
    const contact = this.contacts.find(c => c.id === id);
    return of(contact!);
  }
}
