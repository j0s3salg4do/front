import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeatroListComponent } from './teatro-list/teatro-list.component';
import { TeatroDetailComponent } from './teatro-detail/teatro-detail.component';

@NgModule({
    imports: [CommonModule],
    exports: [TeatroListComponent, TeatroDetailComponent],
    declarations: [TeatroDetailComponent, TeatroListComponent],
})
export class TeatroModule { }