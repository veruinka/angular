import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';


@Directive({
  selector: '[spalvink]'
})
export class SpalvinkDirective implements OnInit{
  @Input() selectedColor:string = 'yellow'; 
  @HostBinding('style.backgroundColor') color="transparent";

  constructor(private eleRef:ElementRef, private render:Renderer2) { }

  ngOnInit(){
     
  }
  private selected=false;

  @HostListener('click') paspaude(eventData:Event){
    this.selected=!this.selected;
    if (this.selected){
      this.color=this.selectedColor;
    }else{
      this.color='transparent';
    }
  }

  @HostListener('mouseenter') uzvaziavo(eventData:Event){
    this.color='#eee';
  }

  @HostListener('mouseleave') isvaziavo(eventData:Event){
    if (this.selected){
      this.color=this.selectedColor;
    }else{
      this.color='transparent';
    }
  }

  

}
