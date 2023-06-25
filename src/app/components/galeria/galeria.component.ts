import { Component, EventEmitter, Output } from '@angular/core';


interface Evento {
  titulo : string;
  descripcion: string;
  imagenes: string[];
}

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {

  @Output() scrollEvent = new EventEmitter();
  mostrarGaleria: boolean = false;
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

  eventoActual: Evento = this.eventos[0];



  siguienteEventos() {
    const indiceActual = this.eventos.indexOf(this.eventoActual);
    const indiceSiguiente = (indiceActual + 1) % this.eventos.length;
    this.eventoActual = this.eventos[indiceSiguiente];
  }
}
