/*
{{ suskaiciuok() }}    string interpoliation
[property]="mygtas"    property binding
(event)="ka atlikti"   event   binding
[(ngModel)]="data"     two-way binding
*/

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sudetis',
  templateUrl: './sudetis.component.html',
  styleUrls: ['./sudetis.component.css']
})
export class SudetisComponent implements OnInit {

  skaicius1: number;
  skaicius2: number;
  rezultatas: number;

  skaiciuoti(){
    this.rezultatas=this.skaicius1+this.skaicius2;
  }

  constructor() {
    
   }

  ngOnInit(): void {
  }

}
