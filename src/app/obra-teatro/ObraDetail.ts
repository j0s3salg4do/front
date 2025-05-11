import { Resena } from "../resena/resena";
import { Funcion } from "../funcion/funcion";
import { ObraTeatro } from "./obra-teatro";

export class ObraDetail extends ObraTeatro {
    resenas: Array<Resena>;
    funciones: Array<Funcion>;
    constructor(
        id: number,
        titulo: string,
        genero: string,
        duracion: number,
        sinopsis: string,
        elenco: string,
        imagen: string,
        resenas: Array<Resena>,
        funciones: Array<Funcion>
    ) {
        super(id, titulo, genero, duracion, sinopsis, elenco, imagen);
        this.resenas = resenas;
        this.funciones = funciones;
    }

}
