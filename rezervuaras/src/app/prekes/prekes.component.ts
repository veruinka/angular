import { Component, OnInit } from '@angular/core';
import { Preke } from './preke.model';

@Component({
  selector: 'app-prekes',
  templateUrl: './prekes.component.html',
  styleUrls: ['./prekes.component.css']
})
export class PrekesComponent implements OnInit {
  pavadinimas:string='';
  kiekis:string='';
  prekes: Preke[]= [];

  constructor() { }

  ngOnInit(): void {
  }

  addPreke(){
    if (this.pavadinimas!='' && this.kiekis!='')
    {
      this.prekes.push( new Preke ((this.prekes.length+1), this.pavadinimas, this.kiekis) );
      this.pavadinimas='';
      this.kiekis='';
    }
  }
  trinti(i){
    this.prekes.splice(i,1);
  }

}
