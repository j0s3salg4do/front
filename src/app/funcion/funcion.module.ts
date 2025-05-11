import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionListComponent } from './funcion-list/funcion-list.component';

@NgModule({
  declarations: [FuncionListComponent],
  imports: [CommonModule],
  exports: [FuncionListComponent]
})
export class FuncionModule {}
