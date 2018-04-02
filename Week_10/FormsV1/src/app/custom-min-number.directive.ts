import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

@Directive({
  selector: '[minnumbervalue][formControlName],[minnumbervalue][formControl],[minnumbervalue][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: CustomMinNumberDirective, multi: true}]
})export class CustomMinNumberDirective {

  // This directive will receive the value that's entered by the user into the HTML Form control
  @Input()
  minnumbervalue: number;
  
  // Defined in the Validator interface, must implement this message
  validate(c: FormControl): {[key: string]: any} {
      let v = c.value;
      return ( v < this.minnumbervalue)? {"minnumbervalue": true} : null;
  }
}
