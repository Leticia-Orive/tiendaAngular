import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = '/api/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  addProduct(product: any): Observable<any> {
    return this.http.post(this.apiUrl, product).pipe(
      catchError(this.handleError)
    );
  }
  
  updateProduct(id: number, product: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, product).pipe(
      catchError(this.handleError)
    );
  }
}
