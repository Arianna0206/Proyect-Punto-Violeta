import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
    scrollEvent = new EventEmitter();

    constructor() {}

    onScroll(event: Event) {
        this.scrollEvent.emit(event);
    }

}