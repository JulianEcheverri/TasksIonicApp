import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule) // se especifica el modulo de las rutas por defecto
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    // preloadingStrategy configuracion por defecto que le dice al router de angular que cargue o precargue modulos de rutas
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
