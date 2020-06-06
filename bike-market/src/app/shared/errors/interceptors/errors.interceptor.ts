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

  constructor(private errorsService: ErrorsService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: any) => {
        const errorShortcut = error.error.error.message.split(' ')[0];
        const errorText = AUTH_ERRORS_LIST[errorShortcut];
        this.errorsService.emitError({errorMessage: errorText});
        return throwError(error);
      }),
    );
  }
}
