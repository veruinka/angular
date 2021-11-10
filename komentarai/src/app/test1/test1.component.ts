import { Component, OnInit } from '@angular/core';
import { TestasService } from '../testas.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor(private testasService:TestasService) { }

  ngOnInit(): void {
  }

  paspausti(){
    //this.testasService.paspaudimas.emit("Mygtukas");
    this.testasService.paspaudimas2.next("Duomenys");
    
  }

}
