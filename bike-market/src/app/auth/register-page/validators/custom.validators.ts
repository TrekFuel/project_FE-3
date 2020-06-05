import {AbstractControl, ValidatorFn} from '@angular/forms';

export class CustomValidators {

  static equalPasswords(psw1, psw2): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      return control.value[psw1] !== control.value[psw2] ? {
        equalPasswords: {value: control.value}
      } : null;
    };
  }
}
