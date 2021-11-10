import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('animuoti',[
      transition('* => *', [
        query(':enter', [style({ opacity:0 })], {optional: true}),
        query(':leave', [style({ opacity:1}), animate(1000, style({opacity:0}))], {optional:true}),
        query(':enter', [style({ opacity:0}), animate(1000, style({opacity:1}))], {optional:true}),
      ])
    ])
  ]
})
export class AppComponent implements OnInit{
  title = 'puslapiai';

  constructor (private router:Router){}

  ngOnInit(){
    console.log(this.router.config);
  }
  
}
