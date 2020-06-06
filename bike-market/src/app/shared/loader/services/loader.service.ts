import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private _isLoader$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get IsLoader$() {
    return this._isLoader$;
  }

  constructor() {
  }

  setIsLoader(value: boolean) {
    return this._isLoader$.next(value);
  }
}
