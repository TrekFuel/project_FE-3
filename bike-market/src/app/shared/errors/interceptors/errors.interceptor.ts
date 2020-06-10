import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AUTH_ERRORS_LIST} from '../configs/errors-list';
import {ErrorsService} from '../services/errors.service';

@Injectable()
export class ErrorsInterceptor implements HttpInterceptor {
  errorText: string;

  constructor(private errorsService: ErrorsService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: any) => {
        const errorShortcut = error.error.error;
        if (errorShortcut.message) {
          this.errorText = AUTH_ERRORS_LIST[errorShortcut.message.split(' ')[0]];
        } else {
          this.errorText = errorShortcut;
        }
        this.errorsService.emitError({errorMessage: this.errorText});
        return throwError(error);
      }),
    );
  }
}
