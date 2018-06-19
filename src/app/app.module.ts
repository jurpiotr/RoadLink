import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VarComponent } from './var/var.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './var/main/main.component';
import { ContainerComponent } from './var/main/container/container.component';
import { HomeServicesComponent } from './var/main/home-services/home-services.component';
import { CarouselComponent } from './var/main/carousel/carousel.component';
import { HomeResponsiveComponent } from './var/main/home-responsive/home-responsive.component';
import { HomeLocalComponent } from './var/main/home-local/home-local.component';
import { HomeGalleryComponent } from './var/main/home-gallery/home-gallery.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    VarComponent,
    FooterComponent,
    MainComponent,
    ContainerComponent,
    HomeServicesComponent,
    CarouselComponent,
    HomeResponsiveComponent,
    HomeLocalComponent,
    HomeGalleryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
