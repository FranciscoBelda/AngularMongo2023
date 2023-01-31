import {FormControl, ValidationErrors} from "@angular/forms";

export class FormValidators{
  static notArrayBlank(control: FormControl): ValidationErrors |
    null {
    console.log(control);
    if (control.value && control.value.length < 1 ) {
// invalid, return error object
      return { notArrayBlank: true };
    }
    else {
// valid, return null
      return null;
    }
  }
}
