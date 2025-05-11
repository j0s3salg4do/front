export class Boleto {
    id: number;
    precio: number;
    nombreTeatro: string;
    cliente: string;
    silla: string;
    tituloObra: string;
    filaSilla: string;
    numeroSilla: number;
    fecha: Date;

  constructor(id: number, precio: number, nombreTeatro: string, cliente: string, silla: string, tituloObra: string, filaSilla: string, numeroSilla: number, fecha: Date) {
        this.id = id;
        this.precio = precio;
        this.nombreTeatro = nombreTeatro;
        this.cliente = cliente;
        this.silla = silla;
        this.tituloObra = tituloObra;
        this.filaSilla = filaSilla;
        this.numeroSilla = numeroSilla;
        this.fecha = fecha;
  }
}