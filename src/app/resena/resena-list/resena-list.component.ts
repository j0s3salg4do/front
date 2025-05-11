import { Component, OnInit } from '@angular/core';
import { Resena } from '../resena';
import { ResenaService } from '../resena.service';

@Component({
  standalone: false,
  selector: 'app-resena-list',
  templateUrl: './resena-list.component.html',
  styleUrls: ['./resena-list.component.css']
})
export class ResenaListComponent implements OnInit {

  resenas: Array<Resena> = [];

  constructor(private resenaService: ResenaService) {}

  ngOnInit(): void {
    this.getResenas();
  }

  getResenas(): void {
    this.resenaService.getResenas().subscribe((resenas: any[]) => {
      this.resenas = Object.values(resenas) });
  }
}