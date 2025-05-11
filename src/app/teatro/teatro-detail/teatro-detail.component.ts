import { Component, OnInit, Input } from '@angular/core';
import { TeatroDetail } from '../TeatroDetail';

@Component({
    standalone: false,
    selector: 'app-teatro-detail',
    templateUrl: './teatro-detail.component.html',
    styleUrls: ['./teatro-detail.component.css'],
})

export class TeatroDetailComponent implements OnInit {
    
    @Input() teatroDetail!: TeatroDetail;
    
    constructor() {}

    ngOnInit(): void {
    }
}