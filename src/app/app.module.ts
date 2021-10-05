import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { EgresoComponent } from './egreso/egreso.component';
import { ingresoServicio } from './ingreso/ingreso.service';
import { egresoServicio } from './egreso/egreso.service';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    FormularioComponent,
    IngresoComponent,
    EgresoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ingresoServicio, egresoServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
