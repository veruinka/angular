import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[usedEmail]',
  providers:[
    {
      provide:NG_VALIDATORS, useExisting: UsedEmailDirective, multi:true
    }
  ]
})
export class UsedEmailDirective implements Validator {

  constructor() { }

  validate(input: FormControl){
    if (input.value=="test@test.lt" || input.value=="g.gricius@ituostas.lt"){
      return {
        UsedEmail:true,
        message:"Jusu el pastas: "+input.value+" jau užimtas"
      };
    }
    return null;
  }
}
