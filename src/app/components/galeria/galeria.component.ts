import { Component } from '@angular/core';

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
  mostrarGaleria: boolean = true;
  eventos: Evento[] = [
    {
      titulo: 'Evento en Madrid',
      descripcion: 'Texto del primer evento...',
      imagenes: [
        '../assets/images/image5.png',
        '../assets/images/image6.png',
        '../assets/images/image7.png',
        '../assets/images/image8.png',
      ],
    },
    
  ];

  eventoActual: Evento = this.eventos[0];


  ocultarGaleria() {
    this.mostrarGaleria = false;
  }

  siguienteEventos() {
    const indiceActual = this.eventos.indexOf(this.eventoActual);
    const indiceSiguiente = (indiceActual + 1) % this.eventos.length;
    this.eventoActual = this.eventos[indiceSiguiente];
  }
}
