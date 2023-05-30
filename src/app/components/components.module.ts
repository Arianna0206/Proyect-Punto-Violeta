import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { CollaboratorsCardComponent } from './collaborators-card/collaborators-card.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ContentCardComponent,
    CollaboratorsCardComponent,
    SliderComponent,
],
  exports: [
    NavbarComponent,
    FooterComponent,
    ContentCardComponent,
    CollaboratorsCardComponent,
    SliderComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class ComponentsModule {}
