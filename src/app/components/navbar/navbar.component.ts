import { Component, HostListener, OnInit, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() scrollEvent = new EventEmitter();
  isScrolled: boolean = false; // Agrega la propiedad isScrolled

  ngOnInit() {
    this.scrollEvent.subscribe(() => {
      this.onWindowScroll();
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
}

