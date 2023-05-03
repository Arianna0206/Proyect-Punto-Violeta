import { Component, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent{
  cardVacia:boolean = false;

vaciarCardPrincipal() {
  this.cardVacia = true;
}

volverCardPrincipal() {
  this.cardVacia = false;
}

}

