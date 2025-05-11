import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObraTeatroListComponent } from './obra-teatro-list/obra-teatro-list.component';
import { ObraTeatroDetailComponent } from './obra-teatro-detail/obra-teatro-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [ObraTeatroListComponent, ObraTeatroDetailComponent],
    declarations: [ObraTeatroDetailComponent, ObraTeatroListComponent],
})
export class ObraTeatroModule { }