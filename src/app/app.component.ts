import { Component, OnInit } from '@angular/core';
import { ObraDetail } from './obra-teatro/ObraDetail';
import { ObraTeatroService } from './obra-teatro/obra-teatro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ISIS2603_202510_S7_E3_ButacaPerfecta_Front';

  obras: ObraDetail[] = [];
  expandedObras: Set<number> = new Set<number>();

  constructor(private obraService: ObraTeatroService, public router: Router) {}

  ngOnInit(): void {
    this.obraService.getObrasDeTeatro().subscribe((data) => {
      this.obras = data;
    });
  }

  toggleObra(id: number): void {
    if (this.expandedObras.has(id)){
      this.expandedObras.delete(id);
    } else {
      this.expandedObras.add(id);
    }
  }

  isExpanded(id: number): boolean {
    return this.expandedObras.has(id);
  }
}
