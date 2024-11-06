
export class SolicitudAulaComponent {
  nombre = '';
  asignatura = '';
  fecha = '';
  mensaje = '';

  onSubmit() {
    this.mensaje = `Solicitud enviada para ${this.asignatura} el ${this.fecha} por ${this.nombre}.`;
    // Aquí puedes agregar la lógica para enviar la solicitud al backend
    // Por ejemplo, llamar a un servicio que maneje las solicitudes
  }
}

