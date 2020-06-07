import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {exhaustMap, take} from 'rxjs/operators';
import {User} from '../models/user.model';
import {AuthService} from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.userSubject$
      .pipe(
        take(1),
        exhaustMap((user: User) => {
          let requestClone = null;
          if (user && user.userToken) {
            requestClone = request.clone({
              params: request.params.set('auth', user.userToken)
            });
          }
          return next.handle(requestClone || request);
        })
      );
  }
}
