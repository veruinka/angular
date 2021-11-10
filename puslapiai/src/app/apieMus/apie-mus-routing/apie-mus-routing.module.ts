import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApieMusComponent } from '../apie-mus/apie-mus.component';
import { IstorijaComponent } from '../istorija/istorija.component';
import { KomandaComponent } from '../komanda/komanda.component';

const apieMusRoutes: Routes = [
  {
    path:"informacija",
    component:ApieMusComponent
  },
  {
    path:"istorija",
    component:IstorijaComponent
  },
  {
    path:"komanda",
    component:KomandaComponent
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(apieMusRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class ApieMusRoutingModule { }
