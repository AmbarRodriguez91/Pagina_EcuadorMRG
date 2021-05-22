import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { InfoRegionesComponent } from './info-regiones/info-regiones.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormularioComponent } from './formulario/formulario.component';
import { NoticiasComponent } from './noticias/noticias.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InfoRegionesComponent,
    CarruselComponent,
    MenuComponent,
    FooterComponent,
    FormularioComponent,
    NoticiasComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatMenuModule,
        NgbModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
