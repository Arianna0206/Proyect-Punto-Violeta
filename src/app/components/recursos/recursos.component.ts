import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css']
})

export class RecursosComponent {
  @Output() scrollEvent = new EventEmitter<string>();

  // Agrega el siguiente método para emitir el evento y mostrar la sección 'recursos'
  mostrarRecursos() {
    this.scrollEvent.emit('recursos');
  }

  openForm(url: string) {
    window.open(url, "_blank");
  }
  
}

