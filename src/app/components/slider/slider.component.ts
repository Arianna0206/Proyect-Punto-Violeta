import { Component, ViewChild, ElementRef, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Point } from 'src/app/core/interfaces/points'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, OnDestroy {

  isScrolled = false;
  hoveredPoint: Point | null = null;
  currentIndex = 0;
  timer: any;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.isScrolled = true;
    } else if (this.isScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.isScrolled = false;
    }
  }

  @ViewChild('myImage')
  image!: ElementRef;
  selected = false;
  
  points: Point[] = [
    {x: 50, y: 50, left: '25%', top: '17%', bottom: '0%', isPulsating: false, textTop: '1. Apoyo jurídico', textBottom: 'Consultorio Jurídico Gratuito UTPL', infoState: 0},
    {x: 20, y: 20, left: '42%', top: '21%', bottom: '0%', isPulsating: false, textTop: '2. Apoyo psicológico', textBottom: 'Ministerio de la mujer', infoState: 0},
    {x: 80, y: 80, left: '33.8%', top: '80%', bottom: '0%',  isPulsating: false, textTop: '3. Apoyo de trabajo social', textBottom: 'Ministerio de la mujer', infoState: 0},
    {x: 80, y: 80, left: '70%', top: '15%', bottom: '0%',  isPulsating: false, textTop: '4. Apoyo médico', textBottom: 'Unidad especial del Hospital Isidro Ayora', infoState: 0},
    {x: 80, y: 80, left: '90.8%', top: '50%', bottom: '0%',  isPulsating: false, textTop: '5.Apoyo para denunciar', textBottom: '', infoState: 0},
    {x: 80, y: 80, left: '75%', top: '78%', bottom: '0%',  isPulsating: false, textTop: '6. Apoyo policial', textBottom: 'Orden de alejamiento y botón rojo de aviso en caso de peligro', infoState: 0}
  ];
  


  ngOnInit() {
    this.startTextRotation();
    this.showInfo(this.points[0]);
  }

  ngOnDestroy() {
    this.stopTextRotation();
  }

  startTextRotation() {
    this.timer = setInterval(() => {
      this.showInfo(this.points[this.currentIndex]);
      this.currentIndex = (this.currentIndex + 1) % this.points.length;
    }, 3000); // Cambia el intervalo de tiempo según tus necesidades
  }

  stopTextRotation() {
    clearInterval(this.timer);
  }

  showInfo(point: Point) {
    this.hoveredPoint = point;
  this.points.forEach(p => {
    p.infoState = 0; // oculta todos los textos
  });
  if (point.infoState === 0) {
    point.infoState = 1; // muestra solo el texto superior
  } else {
    point.infoState = 2; // muestra ambos textos
  }
}

}
