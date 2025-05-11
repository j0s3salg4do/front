/* import { Component, OnInit } from '@angular/core';
import { Asiento } from '../asiento';
import { AsientoService } from '../asiento.service';

@Component({
  standalone: false,
  selector: 'app-asiento-list',
  templateUrl: './asiento-list.component.html',
  styleUrls: ['./asiento-list.component.css']
})
export class AsientoListComponent implements OnInit {

  asientos: Asiento[] = [];
  asientosPorFila: Asiento[][] = [];
  constructor( private asientoService: AsientoService) { }

  getAsientos(): void 
  {
    this.asientoService.getAsientos(1).subscribe((asientos) => {
      this.asientos = Object.values(asientos);
    }
    );
  }

  organizarAsientosPorFila(): void {
    const tamañoFila = 6; 
    this.asientosPorFila = [];

    for (let i = 0; i < this.asientos.length; i += tamañoFila) {
      this.asientosPorFila.push(this.asientos.slice(i, i + tamañoFila));
    }
  }
  
  ngOnInit() 
  {
    this.getAsientos();
  }

}
 */