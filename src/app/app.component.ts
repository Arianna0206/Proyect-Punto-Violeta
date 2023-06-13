import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'puntoVioleta';
  
  mostrarContenido: boolean = true;
  scrollEvent: string | undefined; // Agrega esta propiedad

  scrollToSection(sectionId: string) {
    if (sectionId === 'violeta' || sectionId === 'quienes-somos' || sectionId === 'recursos') {
      this.mostrarContenido = true;
    } else {
      this.mostrarContenido = false;
    }
    this.scrollEvent = sectionId; // Actualiza el valor de la propiedad scrollEvent
  }

  ocultarContenido() {
    this.mostrarContenido = false;
  }
   
}
