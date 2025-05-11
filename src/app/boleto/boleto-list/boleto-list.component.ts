import { Component, OnInit } from '@angular/core';
import { Boleto } from '../boleto';
import { BoletoService } from '../boleto.service';

@Component({
  standalone: false,
  selector: 'app-boleto-list',
  templateUrl: './boleto-list.component.html',
  styleUrls: ['./boleto-list.component.css']
})
export class BoletoListComponent implements OnInit {

  boletos: Array<Boleto> = [];
  constructor( private boletoService: BoletoService) { }

  getBoletos(): void {
    this.boletoService.findAll().subscribe((boletos) => {
        this.boletos = Object.values(boletos);
      });
  }

  ngOnInit() {
    this.getBoletos();
  }

}
