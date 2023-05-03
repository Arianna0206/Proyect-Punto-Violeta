import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { ContentCardComponent } from './components/content-card/content-card.component';
import { CardResourcesComponent } from './components/card-resources/card-resources.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    ContentCardComponent,
    CardResourcesComponent
  ],
  exports: [NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
