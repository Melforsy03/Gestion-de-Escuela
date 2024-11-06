import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aula } from '../models/aula.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AulaService {
  private apiUrl = 'http://localhost:3000/api/aulas'; // URL del backend

  constructor(private http: HttpClient) {}

  obtenerAulasDisponibles(): Observable<Aula[]> {
    return this.http.get<Aula[]>(`${this.apiUrl}/disponibles`);
  }

  solicitarAula(aulaId: string, profesorId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/solicitar`, { aulaId, profesorId });
  }
}
