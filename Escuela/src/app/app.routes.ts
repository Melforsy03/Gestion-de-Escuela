// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudAulaComponent } from './profesor/solicitud-aula/solicitud-aula.component';
import { SolicitudMediosComponent } from './profesor/solicitud-medios/solicitud-medios.component';
import { GestionCalificacionesComponent } from './profesor/gestion-calificaciones/gestion-calificaciones.component';
import { InfoEstudiantesComponent } from './profesor/info-estudiantes/info-estudiantes.component';

export const routes: Routes = [
  { path: '', redirectTo: '/solicitud-aula', pathMatch: 'full' }, // Redirección a la página inicial
  { path: 'solicitud-aula', component: SolicitudAulaComponent },
  { path: 'solicitud-medios', component: SolicitudMediosComponent },
  { path: 'gestion-calificaciones', component: GestionCalificacionesComponent },
  { path: 'info-estudiantes', component: InfoEstudiantesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
