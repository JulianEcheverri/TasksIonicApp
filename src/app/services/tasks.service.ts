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
    // crear dos listas para las pruebas visuales
    const lista1 = new ListaDeTareas('Recolectar priedas del infinito');
    const lista2 = new ListaDeTareas('Heroes a desaparecer');
    this.listasDeTareas.push(lista1,lista2);
    // console.log(this.listasDeTareas);
    
  }

  crearLista(titulo: string){
    const nuevaLista = new ListaDeTareas(titulo);
    this.listasDeTareas.push(nuevaLista);
  }

}
