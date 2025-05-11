export class Teatro {
    id: number;
    nombreTeatro: string;
    direccionTeatro: string;
    capacidad: number;

    constructor(id: number, nombreTeatro: string, direccionTeatro: string, capacidad: number) {
        this.id = id;
        this.nombreTeatro = nombreTeatro;
        this.direccionTeatro = direccionTeatro;
        this.capacidad = capacidad;
    }
}