import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})


export class ContentCardComponent {
  @Output() scrollEvent = new EventEmitter<string>();

  cardVacia: boolean = false;

  vaciarCardPrincipal() {
    this.cardVacia = true;
  }

  volverCardPrincipal() {
    this.cardVacia = false;
    this.scrollEvent.emit('quienes-somos'); // Emitir evento para mostrar la sección 'quienes-somos'
  }
}


