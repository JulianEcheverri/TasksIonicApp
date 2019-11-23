import { Pipe, PipeTransform } from '@angular/core';
import { ListaDeTareas } from '../models/listaDeTareas';

@Pipe({
  name: 'filtro',
  // todos los pipes son puros por defecto
  // quiere decir que se ejecutara dentro del modulo donde se le llama
  // y por ende solo se ejecuta el ciclo de detecion de cambios de angular en el componente donde se esta usando
  // por eso no se actualiza la lista terminada/no terminada al cambiar de tareas
  pure: false
})
export class FiltroPipe implements PipeTransform {

  transform(listas: ListaDeTareas[], completada: boolean = true): ListaDeTareas[] {
    return listas.filter(x => x.terminada === completada);
  }

}
