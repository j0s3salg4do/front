import { Component, OnInit } from '@angular/core';
import { Funcion } from '../funcion';
import { FuncionService } from '../funcion.service';

@Component({
  selector: 'app-funcion-list',
  standalone: false,
  templateUrl: './funcion-list.component.html',
  styleUrls: ['./funcion-list.component.css']
})
export class FuncionListComponent implements OnInit {
  funciones: Funcion[] = [];

  constructor(private funcionService: FuncionService) {}

  getFunciones(): void {
    this.funcionService.findAll().subscribe((funciones) => {
      this.funciones = funciones;
    });
  }

  ngOnInit() {
    this.getFunciones();
  }
}
