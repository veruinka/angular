import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[dropdown]'
})
export class DropdownDirective {
  private isOpen:boolean = false;

  constructor (private elRef:ElementRef){}

  @HostListener('click') toggle(){
    console.log(this.elRef.nativeElement);
    
    const ul=this.elRef.nativeElement.querySelector("ul");

    if (ul!=undefined){
      if (this.isOpen){
        console.log("Uzdarau");
        ul.classList.remove('show');
      }else{
        console.log("Atidarau");
        ul.classList.add('show');
      }
      this.isOpen=!this.isOpen;
    }
  }

  @HostListener('mouseleave') leave(){
    if (this.isOpen){
      this.isOpen=false;
      const ul=this.elRef.nativeElement.querySelector("ul");
      ul.classList.remove('show');
    }
  }
 

}
