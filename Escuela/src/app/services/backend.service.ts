// src/app/services/backend.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private apiUrl = 'http://localhost:3000/api'; // URL del backend

  constructor(private http: HttpClient) {}

  // Método para obtener el mensaje de saludo del backend
  getHelloMessage(): Observable<any> {
    return this.http.get(`${this.apiUrl}/hello`);
  }
}
