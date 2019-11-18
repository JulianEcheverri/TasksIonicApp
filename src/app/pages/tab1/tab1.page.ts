import { Component } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { ListaDeTareas } from '../../models/listaDeTareas';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listaDePendientes: ListaDeTareas[] = [];
  // para inyetar el servicio, poderse usar
  constructor(public tasksService: TasksService) 
  {
    this.listaDePendientes = tasksService.listasDeTareas;
  }

}
