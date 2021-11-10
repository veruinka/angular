import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TestasService } from '../testas.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit, OnDestroy {

  paspaustas=false;
  private paspaudimas:Subscription;


  constructor(private testasService:TestasService) { }

  ngOnInit(): void {
    /*
    this.testasService.paspaudimas.subscribe((pranesimas)=>{
      this.paspaustas=true;
    });
    */
    this.paspaudimas=this.testasService.paspaudimas2.subscribe((tekstas)=>{
      this.paspaustas=true;
    });
  }

  ngOnDestroy(){
    this.paspaudimas.unsubscribe();

  }


}
