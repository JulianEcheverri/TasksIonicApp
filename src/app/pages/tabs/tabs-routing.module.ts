import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1', // estamos indicando que para la ruta tab1, tenga rutas hijas, se especifica el path de las rutas hijas y se carga el modulo de rutas que ellas contienen 
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }, 
          {
            // recibiremos listaId para hacer modificaciones, funciona igual como las rutas de angular y los parametros
            path: 'agregar/:listaId',
            loadChildren: () =>
              import('../agregar/agregar.module').then(m => m.AgregarPageModule) // los dos puntos me devuelven a la carpeta anterior '..'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // indica que son rutas hijas
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
