import { Component, HostListener, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Navbar } from 'src/app/core/interfaces/navbar';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  @Output() ocultarContenido = new EventEmitter<void>();

  isOffcanvasOpen = false;

  @Input() scrollEvent = new EventEmitter();
  isScrolled: boolean = false;

  @Input() navbar!: Navbar;

  constructor(private router: Router, private viewportScroller: ViewportScroller) { }

  ngOnInit() {
    this.scrollEvent.subscribe((sectionId: string) => {
      if (sectionId === 'galeria') {
        this.emitirOcultarContenido();
      } else {
        this.scrollToSection(sectionId);
      }
    });
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageYOffset === 0) {
      this.isScrolled = false;
    } else {
      this.isScrolled = true;
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      this.viewportScroller.scrollToAnchor(sectionId);
    }
  }

  

  toggleOffcanvas() {
    this.isOffcanvasOpen = !this.isOffcanvasOpen;
  }
  

  mostrarGaleria: boolean = false;
  emitirOcultarContenido() {
    this.mostrarGaleria = true; // Actualiza la variable a true
  }


navigateToInformacion() {
  setTimeout(() => {
    const element = document.querySelector('.nested-card.card1');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 300); // Ajusta el valor de scrollDelay según sea necesario
}


}
