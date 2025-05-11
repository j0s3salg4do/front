import { ObraTeatro } from "../obra-teatro/obra-teatro";

export class Funcion {

    id: number;
    fecha: Date;
    hora: string;
    obra: ObraTeatro;
    teatro: string;

    constructor(id: number, fecha: Date, hora: string, obra: ObraTeatro, teatro: string) {
        this.id = id;
        this.fecha = fecha;
        this.hora = hora;
        this.obra = obra;
        this.teatro = teatro;
    }
}
