import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObraTeatroService } from '../obra-teatro.service';
import { ObraDetail } from '../ObraDetail';

@Component({
  standalone: false,
  selector: 'app-obra-teatro-detail',
  templateUrl: './obra-teatro-detail.component.html',
  styleUrls: ['./obra-teatro-detail.component.css']
})
export class ObraTeatroDetailComponent implements OnInit {

  obraDetail!: ObraDetail;

  constructor(
    private route: ActivatedRoute,
    private obraService: ObraTeatroService
  ) {}

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '0');
    this.obraService.getObraDetail(id).subscribe((obra) => {
      this.obraDetail = obra;
    });
  }
}
