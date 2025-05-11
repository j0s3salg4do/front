import { Component, OnInit } from '@angular/core';
import { ObraTeatro } from '../obra-teatro';
import { ObraTeatroService } from '../obra-teatro.service';
import { ObraDetail } from '../ObraDetail';

@Component({
  standalone: false,
  selector: 'app-obra-teatro-list',
  templateUrl: './obra-teatro-list.component.html',
  styleUrls: ['./obra-teatro-list.component.css']
})
export class ObraTeatroListComponent implements OnInit {

  obrasDeTeatro: Array<ObraTeatro> = [];
  
  selected: Boolean = false;
  selectedObra!: ObraDetail;

  onSelect(obra: ObraTeatro): void {
    this.obraService.getObraDetail(obra.id).subscribe((obraDetail) => {
      this.selected = true;
      this.selectedObra = obraDetail;
    })
  }  
  constructor(private obraService: ObraTeatroService) { }

  getObrasDeTeatro(): void {
    this.obraService.getObrasDeTeatro().subscribe((obras) => {
      console.log('RESPUESTA OBRAS', obras);
        this.obrasDeTeatro = obras;
      });
  }

  ngOnInit(): void {
    this.getObrasDeTeatro();
  }

}
