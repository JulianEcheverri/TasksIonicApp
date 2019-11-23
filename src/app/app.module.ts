import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// el modulo de mi app
// un modulo es un conjunto de instrucciones, importaciones, rutas, componentes
// le dicen a mi app con que y como trabajar
// angular es una coleccion de modulos
@NgModule({
  declarations: [AppComponent], // componente
  entryComponents: [],
  imports: [
    BrowserModule, // le dice que trabaje en un navegador web
    IonicModule.forRoot(), // le dice que aqui estan todos los servicios y componetnes de ionic
    AppRoutingModule // le dice la configuracion de las rutas
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
