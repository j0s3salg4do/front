import { Component, OnInit } from '@angular/core';
import { Teatro } from '../teatro';
import { TeatroService } from '../teatro.service';
import { TeatroDetail } from '../TeatroDetail';

@Component({
  standalone: false,
  selector: 'app-teatro-list',
  templateUrl: './teatro-list.component.html',
  styleUrls: ['./teatro-list.component.css']
})
export class TeatroListComponent implements OnInit {

  Teatro: Array<Teatro> = [];
  
  selected: Boolean = false;
  selectedTeatro!: TeatroDetail;

  onSelect(teatro: Teatro): void {
    this.teatroService.getTeatroDetail(teatro.id).subscribe((teatroDetail) => {
      this.selected = true;
      this.selectedTeatro = teatroDetail;
    })
  }  
  constructor(private teatroService: TeatroService) { }

  getTeatro(): void {
    this.teatroService.getTeatro().subscribe((teatro) => {
        this.Teatro = Object.values(teatro);
      });
  }

  ngOnInit(): void {
    this.getTeatro();
  }

}
