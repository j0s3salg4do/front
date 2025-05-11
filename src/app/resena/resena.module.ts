import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResenaListComponent } from './resena-list/resena-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ResenaListComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [ResenaListComponent]
})
export class ResenaModule {}
