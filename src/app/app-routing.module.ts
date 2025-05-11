import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObraTeatroDetailComponent } from './obra-teatro/obra-teatro-detail/obra-teatro-detail.component';
import { ObraTeatroListComponent } from './obra-teatro/obra-teatro-list/obra-teatro-list.component';
//import { AsientoDetailComponent } from './asiento/asiento-detail/asiento-detail.component';//
import { ResenaListComponent } from './resena/resena-list/resena-list.component';
import { TeatroListComponent } from './teatro/teatro-list/teatro-list.component';
import { TeatroDetailComponent } from './teatro/teatro-detail/teatro-detail.component';
const routes: Routes = [
  { path: 'obras', component: ObraTeatroListComponent },
  { path: 'obras/:id', component: ObraTeatroDetailComponent },
//  { path: 'asientos/detalle', component: AsientoDetailComponent }, 
  { path: 'resenas', component: ResenaListComponent },
  {path : 'teatro', component: TeatroListComponent },
  {path : 'teatro/:id', component: TeatroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
