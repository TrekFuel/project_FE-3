import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PostPagePipe implements PipeTransform {

  transform(value: number | null): string {
    let changedValue = '';
    if (value !== null && value) {
      changedValue = value.toString().replace(/\D/g, '');
      if (changedValue.length === 0) {
        changedValue = '';
      } else if (changedValue.length <= 2) {
        changedValue = changedValue.replace(/^(\d{1,2})/,
          '($1)');
      } else if (changedValue.length <= 5) {
        changedValue = changedValue.replace(/^(\d{1,2})(\d{1,3})/,
          '($1) $2');
      } else if (changedValue.length <= 7) {
        changedValue = changedValue.replace(/^(\d{1,2})(\d{1,3})(\d{1,2})/,
          '($1) $2-$3');
      } else if (changedValue.length <= 9) {
        changedValue = changedValue.replace(/^(\d{1,2})(\d{1,3})(\d{1,2})(\d{1,2})/,
          '($1) $2-$3-$4');
      }
    }
    return changedValue;
  }
}
