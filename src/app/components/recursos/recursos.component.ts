import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css']
})
export class RecursosComponent {

  @Output() scrollEvent = new EventEmitter<any>();
  
}
