import { NgModule } from '@angular/core';
// trae todas las directivas de angular ngIf ngFor...
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas/listas.component';
import { IonicModule } from '@ionic/angular';
import { Tab1PageModule } from '../pages/tab1/tab1.module';
import { FiltroPipe } from '../pipes/filtro.pipe';
import { PipesModule } from '../pipes/pipes.module';

// se crea un modulo para reutilizar el codigo que fue usado en el tab 1, otro modulo

@NgModule({
  declarations: [
    // los componentes que usa este modulo
    ListasComponent
  ],
  exports: [
  // necesito utilizar componentes de este modulo en otros modulos
  // usamos exports para exportar cosas de este modulo
  ListasComponent
  ],
  imports: [
    CommonModule,
    IonicModule, // importamos en el modulo los componetnes de ionic
    // importamos el pipe module para filtrar las listas terminadas
    PipesModule
  ]
})
export class ComponentsModule { }
