import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoletoModule } from './boleto/boleto.module';
//import { AsientoModule } from './asiento/asiento.module';
import { TeatroModule } from './teatro/teatro.module';
import { ResenaModule } from './resena/resena.module';
import { FuncionModule } from './funcion/funcion.module';
import { HttpClientModule } from '@angular/common/http';
import { ObraTeatroModule } from "./obra-teatro/obra-teatro.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BoletoModule,
    //AsientoModule,
    TeatroModule,
    ResenaModule,
    FuncionModule,
    HttpClientModule,
    ObraTeatroModule
],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
