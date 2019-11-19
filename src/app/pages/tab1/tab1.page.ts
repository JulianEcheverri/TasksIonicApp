import { Component } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { ListaDeTareas } from '../../models/listaDeTareas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listaDePendientes: ListaDeTareas[] = [];
  // para inyetar el servicio, poderse usar
  // insertamos el router de angular por que se necesita navegar al componente agregar dentro del componente tab
  constructor(public tasksService: TasksService, private router: Router ) 
  {
    this.listaDePendientes = tasksService.listasDeTareas;
  }

  // funcion para navergar a la ruta del componente agregar
  agregarLista(){
    this.router.navigateByUrl('/tabs/tab1/agregar');
  }

}
