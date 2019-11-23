import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    // importamos el components module
    ComponentsModule
  ], 
  declarations: [
    Tab1Page
    // ListasComponent
    // para usar un componente externo debemos declararlo en el modulo donde lo vamos a usar
    // en este caso usaremos el ListasComponents creado y exportado en el modulo de components
    // si lo usamos tambien en el tab2 sacara error por que se extan importando en dos modulos 
    // no se puede declarar el mismo componente en dos modulos separados
    // es necesario importarlo en un modulo superior a tab 1 y tab 2
    //
  ]
})
export class Tab1PageModule {}
