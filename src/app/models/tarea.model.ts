export class Tarea {
    // clase que es el modelo para cada una de nuestras tareas
    descripcion: string;
    completado: boolean;

    constructor(desc: string) {
        this.descripcion = desc;
        this.completado = false;
    }
}
