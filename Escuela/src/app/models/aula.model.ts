// src/app/models/aula.model.ts

import { Medio } from '../models/medio.model';

export interface Aula {
  id: string;                 // Identificador único del aula
  ubicacion: string;          // Ubicación del aula
  capacidad: number;          // Capacidad máxima de estudiantes
  medios: Medio[];            // Lista de medios tecnológicos disponibles en el aula
}
