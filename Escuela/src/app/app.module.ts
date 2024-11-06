import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí

import { AppComponent } from './app.component';
import { SolicitudAulaComponent } from './profesor/solicitud-aula/solicitud-aula.component'; // Ajusta la ruta según tu estructura

@NgModule({
  declarations: [
    AppComponent,
    SolicitudAulaComponent // Asegúrate de declarar tu componente aquí
  ],
  imports: [
    BrowserModule,
    FormsModule // Asegúrate de incluir FormsModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
