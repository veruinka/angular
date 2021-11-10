import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bandymai',
  templateUrl: './bandymai.component.html',
  styleUrls: ['./bandymai.component.css'],
  animations:[
    trigger('kvadratas',[
      state('normal', style({
        transform: 'translateX(0)'
      })),
      state('blue', style({
        transform: 'translateX(300px) scale(0.5)',
      })),
      state('red', style({
        transform: 'translateX(500px)   scale(2)'
      })),
      transition('* <=> *',animate(1000)),
     
    ])
  ]
})
export class BandymaiComponent implements OnInit {

  state='normal';



  constructor() { }

  ngOnInit(): void {
  }

  onButtonClik(){
    if (this.state=='normal'){
      this.state='blue';
    }else if (this.state=='blue'){
      this.state='red';
    }else  if (this.state=='red'){
      this.state='normal';
    }
  }

}
