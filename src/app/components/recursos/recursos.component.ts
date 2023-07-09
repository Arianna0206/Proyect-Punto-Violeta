import { Component, EventEmitter, Input, Output } from '@angular/core'; // Importación de módulos y decoradores de Angular

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css']
})
export class RecursosComponent {
  @Output() scrollEvent = new EventEmitter<string>(); // Emisor de eventos para el desplazamiento

  // Método para emitir el evento y mostrar la sección 'recursos'
  mostrarRecursos() {
    this.scrollEvent.emit('recursos');
  }

  openForm(url: string) {
    window.open(url, "_blank"); // Abrir una nueva ventana o pestaña con la URL especificada
  }
}
