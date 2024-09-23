import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient) { }



  // Método para obtener todos los productos
  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Método para obtener un producto por su ID
  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
