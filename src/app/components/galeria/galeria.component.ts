import { Component, EventEmitter, Output } from '@angular/core';
// Importación de módulos y clases necesarios desde '@angular/core'

import { Evento } from 'src/app/core/interfaces/evento';
// Importación de la interfaz 'Evento' desde el archivo correspondiente

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
// Decorador '@Component' que define las propiedades del componente

/* 
  Creación de la sección de Eventos que contiene una serie de fotografias sobre dicho evento
  y una descripcion del evento.
*/

export class GaleriaComponent {
// Definición de la clase 'GaleriaComponent'

  @Output() scrollEvent = new EventEmitter();
  // Propiedad de salida 'scrollEvent' que emite eventos de desplazamiento/scroll

  mostrarGaleria: boolean = false;
  // Variable que controla la visualización de la galería

  eventos: Evento[] = [
    {
      titulo: 'Evento de Apertura del Punto Violeta en el Consultorio Jurídico Gratuito de la UTPL',
      descripcion: 'Se encuentra localizado dentro del Edificio Colibrí, en el Parque Central. Durante la mañana del 16 de febrero del 2023 se hicieron actividades de sensibilización sobre la violencia de género. Se ofrecieron datos actuales de Ecuador, juegos para los más pequeños y algunos obsequios como manillas, libretas, etc.',
      imagenes: [
        '../assets/images/imagen1Evento1.png',
        '../assets/images/imagen2Evento1.png',
        '../assets/images/imagen3Evento1.png',
        '../assets/images/imagen5Evento1.png',
      ],
    },
  ];
  // Array de eventos de tipo 'Evento' que contiene información sobre cada evento

  eventoActual: Evento = this.eventos[0];
  // Evento actualmente seleccionado, inicializado con el primer evento del array

  siguienteEventos() {
    const indiceActual = this.eventos.indexOf(this.eventoActual);
    // Obtiene el índice del evento actual en el array de eventos
    const indiceSiguiente = (indiceActual + 1) % this.eventos.length;
    // Calcula el índice del siguiente evento teniendo en cuenta el tamaño del array
    this.eventoActual = this.eventos[indiceSiguiente];
    // Asigna el siguiente evento como evento actual
  }
  // Función que avanza al siguiente evento cuando se llama

}
