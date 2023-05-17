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
    {x: 50, y: 50, left: '30%', top: '9.6%', bottom: '0%', isPulsating: false, textTop: '1. Fase de recepción', textBottom: 'Consultorio Jurídico Gratuito UTPL', infoState: 0},
    {x: 20, y: 20, left: '42%', top: '21%', bottom: '0%', isPulsating: false, textTop: '2. Acompañamiento psicológico', textBottom: 'Ministerio', infoState: 0},
    {x: 80, y: 80, left: '33.8%', top: '82.3%', bottom: '0%',  isPulsating: false, textTop: '3. Abogacía', textBottom: 'Consultorio Jurídico Gratuito UTPL', infoState: 0},
    {x: 80, y: 80, left: '57%', top: '20.5%', bottom: '0%',  isPulsating: false, textTop: '4. Trabajo social', textBottom: 'Ministerio', infoState: 0},
    {x: 80, y: 80, left: '90.8%', top: '52%', bottom: '0%',  isPulsating: false, textTop: '5. Denunciar', textBottom: 'Acompañamiento de abogacía y psicología a la Junta', infoState: 0},
    {x: 80, y: 80, left: '75%', top: '80%', bottom: '0%',  isPulsating: false, textTop: '6. Seguimiento', textBottom: 'Acompañamiento en el proceso, y terapia (tratamiento)', infoState: 0}
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
