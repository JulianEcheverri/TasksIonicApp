import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { ListaDeTareas } from '../../models/listaDeTareas';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
@Input() terminada = true;
// me permite manipular componetnes/ elementos del html
// se debe especificar el selector a apuntar
// si son muchos ionlist cogera el arreglo de ellos
@ViewChild(IonList, {static: true} ) lista: IonList;

  // inyectar el servicio
  //   solo se declara en el constructor por que en el servicio esta expotado globalmente
  //   tampoco se importa el modulo de servicios en el modulo de componentes por que es global

  // @Injectable({
  //   providedIn: "root" // para que sea global el servicio
  // })

  // se declara public por que se utiliza externamente
  constructor(private router: Router, public tasksService: TasksService, public alertController: AlertController) {

  }

  ngOnInit() { }

    listaSeleccionada(lista: ListaDeTareas){
    this.router.navigateByUrl(`/tabs/${this.terminada ? 'tab2' : 'tab1'}/agregar/${lista.id}`);   
  }

  borrarLista(lista: ListaDeTareas){
    this.tasksService.borrarLista(lista);
  }

  async cambiarTituloDeLista(lista: ListaDeTareas){
    const alert = await this.alertController.create({
      header: 'Editar lista',
      inputs: [
        {
          name: 'titulo',
          value: lista.titulo,
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () =>{ // handler recibe una funcion, se ejecuta cuando el boton se toca o se cierra la ventana
            // console.log('cancelar');
            this.lista.closeSlidingItems();
          }
        },
        {
          text: 'Actualizar',
          handler: (data) => {
            if (data.titulo.length === 0) { return; } // validacion por si no ingreso nada en el prompo
            lista.titulo = data.titulo;
            this.tasksService.guardarStorage();
            // para cerrar la lista editada mediante la manipulacion del html con viewchild
            this.lista.closeSlidingItems();
          }
        }
      ]
    });
    alert.present();
  }
}
