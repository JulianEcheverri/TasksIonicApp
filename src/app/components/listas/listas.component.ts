import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { ListaDeTareas } from '../../models/listaDeTareas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
@Input() terminada = true;

  // inyectar el servicio
  //   solo se declara en el constructor por que en el servicio esta expotado globalmente
  //   tampoco se importa el modulo de servicios en el modulo de componentes por que es global

  // @Injectable({
  //   providedIn: "root" // para que sea global el servicio
  // })

  // se declara public por que se utiliza externamente
  constructor(private router: Router, public tasksService: TasksService) {

  }

  ngOnInit() { }

    listaSeleccionada(lista: ListaDeTareas){
    this.router.navigateByUrl(`/tabs/${this.terminada ? 'tab2' : 'tab1'}/agregar/${lista.id}`);   
  }

  borrarLista(lista: ListaDeTareas){
    this.tasksService.borrarLista(lista);
  }
}
