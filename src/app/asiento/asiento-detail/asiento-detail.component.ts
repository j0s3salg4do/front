/* import { Component, Input, OnInit } from '@angular/core';
import { Asiento } from '../asiento';
import { AsientoService } from '../asiento.service';

@Component({
  standalone: false,
  selector: 'app-asiento-detail',
  templateUrl: './asiento-detail.component.html',
  styleUrls: ['./asiento-detail.component.css']
})
export class AsientoDetailComponent implements OnInit {

  @Input() asientoDetail!: Asiento;
  asientos: Asiento[] = [];
  asientosSeleccionados: Asiento[] = [];

  constructor(private asientoService: AsientoService) {}

  ngOnInit(): void {
    this.getAsientos();
  }

  getAsientos(): void {
    this.asientoService.getAsientos(1).subscribe(asientos => {
      this.asientos = asientos;
    });
  }

  seleccionarAsiento(asiento: Asiento): void {
    if (!asiento.disponible) return;

    const index = this.asientosSeleccionados.findIndex(a => a.id === asiento.id);
    if (index > -1) {
      this.asientosSeleccionados.splice(index, 1); 
    } else {
      this.asientosSeleccionados.push(asiento); 
    }
  }

  confirmarCompra(): void {
    this.asientosSeleccionados.forEach(asiento => {
      asiento.disponible = false; 
      this.asientoService.actualizarAsiento(1,asiento).subscribe();
    });
    alert('Compra realizada con éxito');
    this.asientosSeleccionados = [];
  }

  estaSeleccionado(asiento: Asiento): boolean {
    return this.asientosSeleccionados.some(a => a.id === asiento.id);
  }
}
 */