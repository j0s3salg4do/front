export class ObraTeatro {
    id: number;
    titulo: string;
    genero: string;
    duracion: number;
    sinopsis: string;
    elenco: string;
    imagen: string;

    constructor(
        id: number,
        titulo: string,
        genero: string,
        duracion: number,
        sinopsis: string,
        elenco: string,
        imagen: string
    ) {
        this.id = id;
        this.titulo = titulo;
        this.genero = genero;
        this.duracion = duracion;
        this.sinopsis = sinopsis;
        this.elenco = elenco;
        this.imagen = imagen;
    }
}
