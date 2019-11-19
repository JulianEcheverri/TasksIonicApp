import { Component } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { ListaDeTareas } from '../../models/listaDeTareas';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listaDePendientes: ListaDeTareas[] = [];
  // para inyetar el servicio, poderse usar
  // insertamos el router de angular por que se necesita navegar al componente agregar dentro del componente tab
  // se manejara los formularios con los alert controller propios de ionic, se inyecta el alertController
  constructor(public tasksService: TasksService, private router: Router, private alertController: AlertController ) 
  {
    this.listaDePendientes = tasksService.listasDeTareas;
  }

  // funcion para navergar a la ruta del componente agregar
  // funcion asincrona, la palabra async trasnforma toda la funcion en una promise que tiene catch, finally, then, etc
  async agregarLista(){
    // el alertController trabaja con una promesa, cuando ya se muestra la ventana del alerta, se dispara el then
    // con el await decimos que espere que todo se ejecute y luego se guarde en la constante 'alert' y luego la presentamos
    const alert = await this.alertController.create({
      header: 'Nueva lista',
      // arreglo de inputs para que el alert sea como un prompt y sirva tambien de formulario
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],    
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () =>{ // handler recibe una funcion, se ejecuta cuando el boton se toca o se cierra la ventana
            console.log('cancelar');
          }          
        },
        {
          text:'Crear',
          // declaramos un handler para recibir los datos ingresados 
          handler: (data) => {
            if (data.titulo.length === 0) return; // validacion por si no ingreso nada en el prompo

            //creacion de la lista con el taskService
            this.tasksService.crearLista(data.titulo);
            console.log(data);
          }
        }
      ]
    });
    alert.present();
    //this.router.navigateByUrl('/tabs/tab1/agregar');
  }

}
