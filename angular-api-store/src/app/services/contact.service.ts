import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private users: User[] = [
    { id: '1', name: 'Juan Perez', email: 'juan@example.com', role: 'admin' },
    { id: '2', name: 'Ana Gomez', email: 'ana@example.com', role: 'user' },
    // Agrega más usuarios
  ];
  //private apiUrl = 'https://api-ejemplo.com/contacts'; // Usa la API pública que desees
  private apiUrl = `${environment.apiUrl}/contacts`;
  constructor(private http: HttpClient) {}
   // Obtener lista de contactos
   getContacts(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // Obtener contacto por ID
  getContactById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  // Actualizar contacto
  updateContact(id: string, contact: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, contact);
  }

  // Añadir contacto
  addContact(contact: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, contact);
  }

  // Eliminar contacto
  deleteContact(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}