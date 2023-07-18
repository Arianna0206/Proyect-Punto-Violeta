import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  openForm(url: string) {
    window.open(url, "_blank"); // Abrir una nueva ventana o pestaña con la URL especificada
  }
}
