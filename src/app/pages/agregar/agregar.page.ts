import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { ActivatedRoute } from '@angular/router';
import { ListaDeTareas } from 'src/app/models/listaDeTareas';
import { Tarea } from '../../models/tarea.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  lista: ListaDeTareas;
  // variable que almacenara lo que escriba en el html del componente
  // usamos ngModel para crear una relacion, lo que escriba lo tendra la variable automaticamente
  // como si fuera un onchange
  // como si fuera un binding
  nombreTarea: '';


  constructor(private tasksService: TasksService, private route: ActivatedRoute) {
    // para leer datos de un parametro que recibe este componente
    // private router: ActivatedRoute y abajo la declaracion
    // https://medium.com/@tiboprea/accessing-url-parameters-in-angular-snapshot-vs-subscription-efc4e70f9053
    const listaId = this.route.snapshot.paramMap.get('listaId');
    this.lista = this.tasksService.obtenerLista(listaId);
    // console.log(listaId);
   }

  ngOnInit() {
  }

  agregarTarea() {
    if (this.nombreTarea.length === 0) { return; } // comprobamos que tenga datos
    // instanciamos el modelo/clase de las tareas que tienen las listas, con titulo como parametro obligatorio
    const nuevaTarea = new Tarea(this.nombreTarea); 
    // añadimos la tarea a la lista ya cargada en el contrsuctor, 'tareas' es un arreglo de tarea model
    this.lista.tareas.push(nuevaTarea);
    this.nombreTarea = ''; // vaciamos el atributo

    // con javascript todos los objetos son pasados por referencia
    // es decir, al obtenert la variable this.lista = this.tasksService.obtenerLista(listaId)
    // estamos obteniendo el dato original
    // por eso cuando corremos el metodo de guardar lista, nos guardara la modificacion con los items
    this.tasksService.guardarStorage();

    // En JavaScript, cuando asignamos un valor a una variable, 
    // o pasamos un argumento a una función, este proceso siempre se hace “por valor” (by value en inglés). 
    // Estrictamente hablando, JavaScript no nos ofrece la opción de pasar o asignar “por referencia” 
    // (by reference en inglés), como en otros lenguajes. Lo interesante en nuestro caso, es que cuando 
    // una variable hace referencia a un objeto (Object, Array o Function), el “valor” es la referencia en sí.
    // Cuando asignamos valores primitivos (Boolean, Null, Undefined, Number, String y Symbol), 
    // el valor asignado es una copia del valor que estamos asignando. 
    // Pero cuando asignamos valores NO primitivos o complejos (Object, Array y Function), 
    // JavaScript copia “la referencia”, lo que implica que no se copia el valor en sí, 
    // si no una referencia a través de la cual accedemos al valor original.
  }

  cambiarCheck(item: Tarea){
    // console.log(item);
    // filter me devuelve una coleccion de datos segun lo especificado
    const pendientes = this.lista.tareas.filter(x => !x.completado).length; 
    if (pendientes === 0) {
      this.lista.terminadaEn = new Date();
      this.lista.terminada = true;
    } else {
      this.lista.terminadaEn = null;
      this.lista.terminada = false;
    }
    this.tasksService.guardarStorage();
  }

  borrarTarea(index: number){
    this.lista.tareas.splice(index, 1);
    this.tasksService.guardarStorage();
  }
}
