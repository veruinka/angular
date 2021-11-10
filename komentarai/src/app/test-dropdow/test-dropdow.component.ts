import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-dropdow',
  templateUrl: './test-dropdow.component.html',
  styleUrls: ['./test-dropdow.component.css']
})
export class TestDropdowComponent implements OnInit {
  atliktaDarbo=0;
  constructor() { }

  atliktasDarbas(){
    if (this.atliktaDarbo<100){
      this.atliktaDarbo++;
      setTimeout( ()=>{this.atliktasDarbas()}, 500 );
      console.log(this.atliktaDarbo);
    }
  }

  ngOnInit(): void {
    this.atliktasDarbas();
  }

}
