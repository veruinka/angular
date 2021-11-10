import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rezervuaras',
  templateUrl: './rezervuaras.component.html',
  styleUrls: ['./rezervuaras.component.css']
})
export class RezervuarasComponent implements OnInit {

  laikas:number = 0;
  greitis:number = 0;
  talpa:number =0;
  rezultatas:number =0;

  rezultatai:number[]=[];

  skaiciuoti(){
    this.rezultatas=(this.laikas*this.greitis/this.talpa)*100;
    this.rezultatai.push(this.rezultatas);
  }

  getColor(){
    if (this.rezultatas>50){
      return 'red';
    }else{
      return 'blue';
    }
  }
 
  
  constructor() { }

  ngOnInit(): void {
  }


}
