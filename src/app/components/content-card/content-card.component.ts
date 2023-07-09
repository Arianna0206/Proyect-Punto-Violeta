import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
/*
  Contenido de card que contiene concepto de Quienes somos, recursos, gráficas y colaboradores 
  además de contener una card vacia que contiene información relevante sobre la cátedra UNESCO 
*/

export class ContentCardComponent {
  // Se declara un evento de salida llamado scrollEvent que emite una cadena de texto
  @Output() scrollEvent = new EventEmitter<string>();

  // Se declara una propiedad booleana llamada cardVacia y se inicializa como false
  cardVacia: boolean = false;

  // Función que vacía la tarjeta principal estableciendo cardVacia como true
  vaciarCardPrincipal() {
    this.cardVacia = true;
  }

  // Función que vuelve a la tarjeta principal estableciendo cardVacia como false y emitiendo el evento scrollEvent con el valor 'quienes-somos'
  volverCardPrincipal() {
    this.cardVacia = false;
    this.scrollEvent.emit('quienes-somos');
  }
}
