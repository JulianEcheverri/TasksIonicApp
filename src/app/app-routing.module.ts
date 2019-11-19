import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule) // se especifica el modulo de las rutas por defecto
  },
  // {
  //   // se necesita  que se muestra esta url dentro de los tabs,
  //   // esta es la forma natural y nos lleva a una pagina normal
  //   // carga todo el modulo de la pagina agregar
  //   // se agrega esa ruta como parte de los tabs, en el tabs routing modules y se agrega como ruta hija
  //   path: 'agregar',
  //   loadChildren: () => import('./pages/agregar/agregar.module').then( m => m.AgregarPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    // preloadingStrategy configuracion por defecto que le dice al router de angular que cargue o precargue modulos de rutas
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
