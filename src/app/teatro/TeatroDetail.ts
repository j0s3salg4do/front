
import { Teatro } from "./teatro";

export class TeatroDetail extends Teatro {
    constructor(
        id: number,
        nombre: string,
        direccion: string,
        capacidad: number
    ) {
        super(id, nombre, direccion, capacidad);
    }

}

'// The TeatroDetail class extends the'