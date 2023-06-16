import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})

export class ContentCardComponent {
  @Output() scrollEvent = new EventEmitter<string>();

  cardVacia: boolean = false;
  mostrarTitulo: boolean = true;

  vaciarCardPrincipal() {
    this.cardVacia = true;
    this.mostrarTitulo = false;
  }

  volverCardPrincipal() {
    this.cardVacia = false;
    this.scrollEvent.emit('quienes-somos'); // Emitir evento para mostrar la sección 'quienes-somos'
  }
}


