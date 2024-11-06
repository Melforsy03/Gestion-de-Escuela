// src/app/models/estudiante.model.ts

export interface Estudiante {
    id: string;                 // Identificador único del estudiante
    nombre: string;             // Nombre del estudiante
    edad: number;               // Edad del estudiante
    curso: string;              // Curso al que pertenece
    rendimiento: {              // Rendimiento académico por asignatura
      asignatura: string;
      nota: number;
    }[];
    ausencias: number;          // Cantidad de ausencias injustificadas
    actividadesExtracurriculares: boolean; // Participación en actividades extracurriculares
  }
  