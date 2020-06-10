import {Injectable} from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../../auth/services/auth.service';
import {map, take} from 'rxjs/operators';
import {User} from '../../auth/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class PostGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.userSubject$
      .pipe(
        take(1),
        map((user: User) => {
          if (user) {
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        })
      );
  }

}
