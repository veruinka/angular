import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KontaktaiComponent } from '../kontaktai.component';

const kontaktaiRoutes: Routes = [
  {
    path:"",
    component:KontaktaiComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(kontaktaiRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class KontaktaiRoutingModule { }
