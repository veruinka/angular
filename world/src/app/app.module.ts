import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { CountryEditComponent } from './country/country-edit/country-edit.component';
import { WorldComponent } from './world/world.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
  {path: "", component:WorldComponent},
  {path: "country/:id", component:CountryComponent},
  {path: "country/:id/edit", component:CountryEditComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountryEditComponent,
    WorldComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
