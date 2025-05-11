import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoletoListComponent } from './boleto-list/boleto-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BoletoListComponent
  ],
  declarations: [BoletoListComponent]
})
export class BoletoModule { }
