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
    {x: 50, y: 50, description: 'Punto violeta es una herramienta de autodefensa feminista que, desde un enfoque transincluyente e interseccional, atiende una forma muy específica de violencia,a saber, la que sufren aquellas personas que socializan, se sienten o se han sentido mujeres.', left: '30%', top: '9.6%', isInfoVisible: false, isPulsating: false},
    {x: 20, y: 20, description: 'En el mundo una de cada tres mujeres sufre violencia sexual o física, en su mayoría, por parte de su pareja. La violencia contra las mujeres y las niñas constituye una violación de los derechos humanos. ', left: '42%', top: '21%', isInfoVisible: false, isPulsating: false},
    {x: 80, y: 80, description: 'Third point', left: '33.8%', top: '82.3%', isInfoVisible: false, isPulsating: false},
    {x: 80, y: 80, description: '4 point', left: '57%', top: '20.5%', isInfoVisible: false, isPulsating: false},
    {x: 80, y: 80, description: '5 point', left: '90.8%', top: '52%', isInfoVisible: false, isPulsating: false},
    {x: 80, y: 80, description: '6 point', left: '75%', top: '80%', isInfoVisible: false, isPulsating: false}
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


