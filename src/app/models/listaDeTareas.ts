import { Tarea } from "./tarea.model";

export class ListaDeTareas {
    id: number;
    titulo: string;
    creadaEn: Date;
    terminadaEn: Date;
    terminada: boolean;
    tareas: Tarea[];

    constructor(titulo: string) {
        // inicializamos con titulo porque al crear una lista se debe tener un titulo 
        this.titulo = titulo;
        this.creadaEn = new Date();
        this.terminada = false;
        this.tareas = [];
        this.id = new Date().getTime(); // se realiza asi por que no es posible que se creen dos listas al mismo tiempo
    }
}