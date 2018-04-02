import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

@Directive({
  selector: '[maxnumbervalue][formControlName],[maxnumbervalue][formControl],[maxnumbervalue][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: CustomMaxNumberDirective, multi: true}]
})
export class CustomMaxNumberDirective {

  @Input()
  maxnumbervalue: number;
  
  validate(c: FormControl): {[key: string]: any} {
    let v = c.value;
      return ( v > this.maxnumbervalue)? {"maxnumbervalue": true} : null;
  }

}
