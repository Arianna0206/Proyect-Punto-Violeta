import { Component, ViewChild, ElementRef, HostListener, OnInit, OnDestroy } from '@angular/core'; // Importación de módulos y decoradores de Angular
import { Point } from 'src/app/core/interfaces/points'; // Importación de la interfaz 'Point' desde el archivo de interfaces

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, OnDestroy {

  isScrolled = false; // Bandera para indicar si se ha desplazado la página
  hoveredPoint: Point | null = null; // Punto sobre el que se encuentra el cursor o 'null' si no hay ninguno
  currentIndex = 0; // Índice actual para mostrar el texto rotatorio
  timer: any; // Referencia al temporizador para el texto rotatorio

  @HostListener('window:scroll', []) // Escucha el evento de desplazamiento de la ventana
  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.isScrolled = true; // Si la página se ha desplazado más de 100 píxeles, se establece 'isScrolled' a verdadero
    } else if (this.isScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.isScrolled = false; // Si la página se ha desplazado menos de 10 píxeles y 'isScrolled' es verdadero, se establece a falso
    }
  }

  @ViewChild('myImage') // Referencia al elemento 'myImage' en la plantilla
  image!: ElementRef;
  selected = false; // Indicador de selección

  points: Point[] = [
    // Lista de puntos con sus propiedades
    {x: 50, y: 50, left: '25%', top: '17%', bottom: '0%', isPulsating: false, textTop: '1. Apoyo jurídico', textBottom: 'Consultorio Jurídico Gratuito UTPL', infoState: 0},
    {x: 20, y: 20, left: '42%', top: '21%', bottom: '0%', isPulsating: false, textTop: '2. Apoyo psicológico', textBottom: 'Ministerio de la mujer', infoState: 0},
    {x: 80, y: 80, left: '33.8%', top: '80%', bottom: '0%',  isPulsating: false, textTop: '3. Apoyo de trabajo social', textBottom: 'Ministerio de la mujer', infoState: 0},
    {x: 80, y: 80, left: '70%', top: '15%', bottom: '0%',  isPulsating: false, textTop: '4. Apoyo médico', textBottom: 'Unidad especial del Hospital Isidro Ayora', infoState: 0},
    {x: 80, y: 80, left: '90.8%', top: '50%', bottom: '0%',  isPulsating: false, textTop: '5.Apoyo para denunciar', textBottom: '', infoState: 0},
    {x: 80, y: 80, left: '75%', top: '78%', bottom: '0%',  isPulsating: false, textTop: '6. Apoyo policial', textBottom: 'Orden de alejamiento y botón rojo de aviso en caso de peligro', infoState: 0}
  ];

  ngOnInit() {
    this.startTextRotation(); // Inicia la rotación del texto
    this.showInfo(this.points[0]); // Muestra la información del primer punto
  }

  ngOnDestroy() {
    this.stopTextRotation(); // Detiene la rotación del texto al destruir el componente
  }

  startTextRotation() {
    this.timer = setInterval(() => {
      this.showInfo(this.points[this.currentIndex]); // Muestra la información del punto actual
      this.currentIndex = (this.currentIndex + 1) % this.points.length; // Avanza al siguiente punto
    }, 3000); // Intervalo de tiempo para la rotación del texto (cambia según tus necesidades)
  }

  stopTextRotation() {
    clearInterval(this.timer); // Detiene el temporizador de la rotación del texto
  }

  showInfo(point: Point) {
    this.hoveredPoint = point; // Establece el punto sobre el que se encuentra el cursor
    this.points.forEach(p => {
      p.infoState = 0; // Oculta todos los textos de información
    });
    if (point.infoState === 0) {
      point.infoState = 1; // Muestra solo el texto superior del punto seleccionado
    } else {
      point.infoState = 2; // Muestra ambos textos de información del punto seleccionado
    }
  }
}
