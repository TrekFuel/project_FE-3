import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CheckboxService {
  private _clicks: string[] = [];

  constructor(private router: Router) {
  }

  log(value) {
    console.log(`${value} was clicked!`);
    this._clicks.push(value);
    console.log(this._clicks);
  }

}
