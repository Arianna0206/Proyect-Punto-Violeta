import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { ContentCardComponent } from './components/content-card/content-card.component';
import { CollaboratorsCardComponent } from './components/collaborators-card/collaborators-card.component';

const routes: Routes = [
  { path: '', redirectTo: '/slider', pathMatch: 'full' },
  { path: 'slider', component: SliderComponent },
  { path: 'content-card', component: ContentCardComponent },
  { path: 'collaborators-card', component: CollaboratorsCardComponent },
  { path: 'footer', component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
