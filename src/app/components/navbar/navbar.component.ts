import { Component, HostListener, OnInit, Input, Output, EventEmitter, Renderer2 } from '@angular/core'; // Importación de módulos y decoradores de Angular
import { Router, NavigationEnd } from '@angular/router'; // Importación del enrutador de Angular
import { Navbar } from 'src/app/core/interfaces/navbar'; // Importación de la interfaz Navbar desde la ubicación específica
import { ViewportScroller } from '@angular/common'; // Importación del ViewportScroller de Angular

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() ocultarContenido = new EventEmitter<void>(); // Emisor de eventos para ocultar contenido

  isOffcanvasOpen = false; // Estado del offcanvas
  isGaleriaPage = false; // Indica si la página actual es la página de la galería
  isInformacionPage = false; // Indica si la página actual es la página de información

  @Input() scrollEvent = new EventEmitter(); // Evento de desplazamiento recibido desde el componente padre
  isScrolled: boolean = false; // Indica si la página ha sido desplazada hacia abajo

  @Input() navbar!: Navbar; // Datos de la barra de navegación recibidos desde el componente padre

  constructor(private router: Router, private viewportScroller: ViewportScroller, private renderer: Renderer2) { }

  ngOnInit() {
    // Suscribirse al evento de desplazamiento
    this.scrollEvent.subscribe((sectionId: string) => {
      if (sectionId === 'galeria') {
        this.emitirOcultarContenido(); // Emitir el evento para ocultar contenido si la sección es 'galeria'
      } else {
        this.scrollToSection(sectionId); // Desplazarse a la sección especificada
      }
    });

    // Suscribirse a los eventos de navegación del enrutador
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isGaleriaPage = event.url.includes('/galeria'); // Comprobar si la página actual es la página de la galería
        this.isInformacionPage = event.url.includes('/informacion'); // Comprobar si la página actual es la página de información
        this.actualizarVisibilidadBotones(); // Actualizar la visibilidad de los botones según la página actual
      }
    });

  }

  // Método para actualizar la visibilidad de los botones según la página actual
  actualizarVisibilidadBotones() {
    const botonQuienesSomos = document.getElementById('boton-quienes-somos');
    const botonRecursos = document.getElementById('boton-recursos');
    const botonInformacion = document.getElementById('boton-informacion');

    if (this.isGaleriaPage || this.isInformacionPage) {
      this.renderer.setStyle(botonQuienesSomos, 'display', 'none'); // Ocultar el botón 'Quiénes Somos'
      this.renderer.setStyle(botonRecursos, 'display', 'none'); // Ocultar el botón 'Recursos'
      this.renderer.setStyle(botonInformacion, 'display', 'none'); // Ocultar el botón 'Información'
    } else {
      this.renderer.removeStyle(botonQuienesSomos, 'display'); // Mostrar el botón 'Quiénes Somos'
      this.renderer.removeStyle(botonRecursos, 'display'); // Mostrar el botón 'Recursos'
      this.renderer.removeStyle(botonInformacion, 'display'); // Mostrar el botón 'Información'
    }
  }

  // Evento de desplazamiento de la ventana
  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageYOffset === 0) {
      this.isScrolled = false; // La página está en la parte superior
    } else {
      this.isScrolled = true; // La página ha sido desplazada hacia abajo
    }
  }

  // Método para desplazarse a una sección específica de la página
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      this.viewportScroller.scrollToAnchor(sectionId); // Desplazarse a la sección utilizando ViewportScroller de Angular
    }
  }

  // Alternar el estado del offcanvas
  toggleOffcanvas() {
    this.isOffcanvasOpen = !this.isOffcanvasOpen;
  }

  mostrarGaleria: boolean = false; // Indica si se debe mostrar la galería
  emitirOcultarContenido() {
    this.mostrarGaleria = true; // Actualizar la variable a true para mostrar la galería
  }

  // Navegar a la sección de información con desplazamiento suave
  navigateToInformacion() {
    setTimeout(() => {
      const element = document.querySelector('.nested-card.card1');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' }); // Desplazarse a la sección utilizando scrollIntoView con comportamiento suave
      }
    }, 300); // Ajustar el valor de scrollDelay según sea necesario
  }
}
