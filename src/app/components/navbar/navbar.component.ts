import { Component, HostListener, OnInit, Input, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Navbar } from 'src/app/core/interfaces/navbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {
  @Input() scrollEvent = new EventEmitter();
  addClass: boolean = false;

  @Input() navbar!: Navbar;
  constructor(private router: Router) {}

  ngOnInit() {
    this.scrollEvent.subscribe(() => {
      this.onWindowScroll();
      // console.log('scroll');
    });
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageYOffset === 0) {
      this.addClass = false;
      // console.log('scroll-top');
      // add clss to element a navbar

    } else {
      this.addClass = true;
    }
  }
}

