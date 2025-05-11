
export class Asiento {

    id: number;
    fila: String;
    numero: number;
    disponible: boolean;
    nombreTeatro: string;

    constructor(id: number, fila: string, numero: number, disponible: boolean, nombreTeatro: string) {
        this.id = id;
        this.fila = fila;
        this.numero = numero;
        this.disponible = disponible;
        this.nombreTeatro = nombreTeatro;
    }
}
