import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckboxService {
  private _clicks: string[] = [];

  constructor() {
  }

  log(value) {
    console.log(`${value} was clicked!`);
    this._clicks.push(value);
    console.log(this._clicks);
  }
}
