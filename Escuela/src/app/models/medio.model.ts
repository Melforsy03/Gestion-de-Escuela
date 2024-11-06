// src/app/models/medio.model.ts

export interface Medio {
    id: string;                 // Identificador único del medio
    nombre: string;             // Nombre del medio (ej. Proyector)
    tipo: 'tecnologico' | 'didactico'; // Tipo de medio
    estado: 'disponible' | 'mantenimiento' | 'no disponible'; // Estado de uso
    aulaAsignada?: string;      // Aula a la que está asignado (opcional)
  }
  