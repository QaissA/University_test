import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { SliderCardComponent } from './global_components/slider-card/slider-card.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { ActualitesCardComponent } from './global_components/actualites-card/actualites-card.component';
import { ActualitesCardLargeComponent } from './global_components/actualites-card-large/actualites-card-large.component';
import { FooterComponent } from './footer/footer.component';
import { FormRegisterComponent } from './form-register/form-register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    SliderCardComponent,
    PresentationComponent,
    ActualitesComponent,
    ActualitesCardComponent,
    ActualitesCardLargeComponent,
    FooterComponent,
    FormRegisterComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
