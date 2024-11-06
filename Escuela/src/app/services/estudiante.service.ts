import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estudiante } from '../models/estudiante.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EstudianteService {
  private apiUrl = 'http://localhost:3000/api/estudiantes';

  constructor(private http: HttpClient) {}

  obtenerEstudiantesPorAsignatura(asignaturaId: string): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(`${this.apiUrl}/asignatura/${asignaturaId}`);
  }

  actualizarNota(estudianteId: string, asignaturaId: string, nota: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${estudianteId}/asignatura/${asignaturaId}/nota`, { nota });
  }
}
