import { NgModule } from '@angular/core';
import { FiltroPipe } from './filtro.pipe';

// declaramos el pipe module por que lo usaremos en todos los modulos de la aplicacion
// el pipe es para usar filtros entre los modulos que me especifique las terminadas y las que no

@NgModule({
  declarations: [FiltroPipe],
  // exportamos el pipe para usarlo en otros modulos
  exports:[
    FiltroPipe
  ]
  

})
export class PipesModule { }
