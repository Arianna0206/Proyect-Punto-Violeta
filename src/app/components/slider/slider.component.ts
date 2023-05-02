import { Component, ViewChild, ElementRef, HostListener} from '@angular/core';
import { Point } from 'src/app/core/interfaces/points'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  isScrolled = false;

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
    {x: 50, y: 50, left: '30%', top: '9.6%', bottom: '0%', isInfoVisible: false, isPulsating: false, textTop: '1. Fase de recepción', textBottom: 'Consultorio Jurídico Gratuito UTPL'},
    {x: 20, y: 20, left: '42%', top: '21%', bottom: '0%', isInfoVisible: false, isPulsating: false, textTop: '2. Acompañamiento psicológico', textBottom: 'Ministerio'},
    {x: 80, y: 80, left: '33.8%', top: '82.3%', bottom: '0%', isInfoVisible: false, isPulsating: false, textTop: '3. Abogacía', textBottom: 'Consultorio Jurídico Gratuito UTPL'},
    {x: 80, y: 80, left: '57%', top: '20.5%', bottom: '0%', isInfoVisible: false, isPulsating: false, textTop: '4. Trabajo social', textBottom: 'Ministerio'},
    {x: 80, y: 80, left: '90.8%', top: '52%', bottom: '0%', isInfoVisible: false, isPulsating: false, textTop: '5. Denunciar', textBottom: 'Acompañamiento de abogacía y psicología a la Junta'},
    {x: 80, y: 80, left: '75%', top: '80%', bottom: '0%', isInfoVisible: false, isPulsating: false, textTop: '6. Seguimiento', textBottom: 'Acompañamiento en el proceso, y terapia (tratamiento)'}
  ];
  


  ngOnInit() {
    
  }

  showInfo(points:Point) {
    this.points.forEach(p => {
      p.isInfoVisible = false; // oculta todas las descripciones
    });
    points.isInfoVisible = !points.isInfoVisible; // muestra o oculta la descripción del punto seleccionado
  }
}


