import { Directive, ElementRef, HostBinding, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[progressBar]'
})
export class ProgressBarDirective implements OnInit, OnChanges  {
  @Input() value:number=0;
  @Input() color:string=null;
  @HostBinding('style.width') width:string=`${this.value}%`;
  constructor(private elRef:ElementRef) { 

  }

  ngOnInit(){
    this.width=`${this.value}%`;
    if (this.color){
      this.elRef.nativeElement.classList.add(this.color);
    }
  }

  ngOnChanges(){
    this.width=`${this.value}%`;
  }

}
