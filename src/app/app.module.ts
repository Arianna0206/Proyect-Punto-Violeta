import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { ContentCardComponent } from './components/content-card/content-card.component';
import { CollaboratorsCardComponent } from './components/collaborators-card/collaborators-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { RecursosComponent } from './components/recursos/recursos.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { InformacionComponent } from './components/informacion/informacion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    ContentCardComponent,
    CollaboratorsCardComponent,
    FooterComponent,
    RecursosComponent,
    GaleriaComponent,
    InformacionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    OwlModule,
    CommonModule,
    CarouselModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
