import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'https://api-ejemplo.com/contacts'; // Usa la API pública que desees

  constructor(private http: HttpClient) {}

  // Obtener todos los contactos
  getContacts(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Obtener un contacto por ID
  getContactById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Añadir un nuevo contacto
  addContact(contact: any): Observable<any> {
    return this.http.post(this.apiUrl, contact);
  }

  // Editar un contacto
  updateContact(id: string, contact: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, contact);
  }

  // Borrar un contacto
  deleteContact(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
