import {Injectable} from '@angular/core';
import {CustomError} from '../models/error.model';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {
  private _error: CustomError = null;
  private _errorSubject$: BehaviorSubject<CustomError> =
    new BehaviorSubject<CustomError>(this._error);
  private _errorTimer: any;

  get error$() {
    return this._errorSubject$;
  }

  constructor() {
  }

  emitError(error: CustomError) {
    this._error = error;
    this._errorSubject$.next({...this._error});
    this._errorTimer = setTimeout(() => this.resetError(), 5000);
  }

  resetError() {
    this._errorSubject$.next(null);
    this._error = null;
  }
}
