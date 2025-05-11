import { ObraTeatro } from '../obra-teatro/obra-teatro';
import { Teatro } from '../teatro/teatro';

export class Resena {
  id: number;
  comentario: string;
  calificacion: number;
  cliente?: {
    id: number;
    nombreUsuario: string;
    correoUsuario: string;
  };
  obraDeTeatro?: ObraTeatro;
  teatro?: Teatro;

  constructor(
    id: number,
    comentario: string,
    calificacion: number,
    cliente?: { id: number; nombreUsuario: string; correoUsuario: string },
    obraDeTeatro?: ObraTeatro,
    teatro?: Teatro
  ) {
    this.id = id;
    this.comentario = comentario;
    this.calificacion = calificacion;
    this.cliente = cliente;
    this.obraDeTeatro = obraDeTeatro;
    this.teatro = teatro;
  }
}