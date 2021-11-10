import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { BandymaiComponent } from '../bandymai/bandymai.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';

const appRoutes: Routes = [
 
  {
    path:"about",
    component:AboutComponent

},
{
  path:"",
  component:HomepageComponent
},
{
 path:"portfolio",
 component:PortfolioComponent
},
{
 path:"contacts",
 component:ContactsComponent
},
{
 path:"bandymai",
 component:BandymaiComponent
},

  {
    path: "kontaktai",
    loadChildren: ()=>{
      return import("./../kontaktai/kontaktai.module").then(m=>m.KontaktaiModule);
    }
  },
  {
    path:"apie-mus",
    loadChildren: ()=>import("./../apieMus/apie-mus.module").then(m=>m.ApieMusModule)
  }
  
]

@NgModule({
  declarations: [],
  imports: [
   
    RouterModule.forRoot(appRoutes, {preloadingStrategy:PreloadAllModules})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
