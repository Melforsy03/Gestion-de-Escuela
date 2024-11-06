// src/app/models/profesor.model.ts
export interface Profesor {
    id: string;                 // Identificador único del profesor
    nombre: string;             // Nombre del profesor
    apellidos: string;          // Apellidos del profesor
    especialidad: string;       // Especialidad del profesor
    tipoContrato: 'completo' | 'parcial'; // Tipo de contrato
    asignaturas: string[];      // Asignaturas que imparte
    experiencia: number;        // Años de experiencia laboral
    valoracion: number;         // Valoración promedio de los estudiantes (0 a 10)
  }
  