import {Injectable} from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot, Router
} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {map, take} from 'rxjs/operators';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.userSubject$
      .pipe(
        take(1),
        map((user: User) => {
          if (!user) {
            return true;
          } else {
            this.router.navigate(['/']);
            return false;
          }
        })
      );
  }

}

