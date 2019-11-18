import { Injectable } from '@angular/core';
import { ListaDeTareas } from '../models/listaDeTareas';


@Injectable({
  providedIn: 'root'
})
export class TasksService {
  // aquie manejaremos las listas de las tareas
  // se crea un modelo de tarea y de listado de tareas
  // obtenemos las listas
  listasDeTareas: ListaDeTareas[] = [];


  // idea del servicio es manejar una unica instancia a lo largo de la aplicacion
  constructor() 
  { 
    console.log('servicio inicializado');

  }


}
