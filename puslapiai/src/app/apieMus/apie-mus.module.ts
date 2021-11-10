import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApieMusComponent } from './apie-mus/apie-mus.component';
import { IstorijaComponent } from './istorija/istorija.component';
import { KomandaComponent } from './komanda/komanda.component';
import { ApieMusRoutingModule } from './apie-mus-routing/apie-mus-routing.module';



@NgModule({
  declarations: [
    ApieMusComponent,
    IstorijaComponent,
    KomandaComponent,
    
  ],
  imports: [
    CommonModule,
    ApieMusRoutingModule
  ],
  exports:[
   
  ]
})
export class ApieMusModule { }
