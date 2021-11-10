import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KontaktaiComponent } from './kontaktai.component';
import { KontaktaiRoutingModule } from './kontaktai-routing/kontaktai-routing.module';



@NgModule({
  declarations: [
    KontaktaiComponent
  ],
  imports: [
    CommonModule,
    KontaktaiRoutingModule
  ]
})
export class KontaktaiModule { }
