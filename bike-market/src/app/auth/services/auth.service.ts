import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../models/user.model';
import {tap} from 'rxjs/operators';
import {AuthResponse} from '../models/auth-response.model';
import {Router} from '@angular/router';
import {ErrorsService} from '../../shared/errors/services/errors.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user$: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  get userSubject$() {
    return this._user$;
  }

  constructor(private http: HttpClient,
              private router: Router,
              private errorsService: ErrorsService) {
  }

  signUp(email: string, password: string): Observable<object> {
    return this.http.post(`${environment.firebase.signUpUrl}${environment.firebase.apiKey}`,
      {email, password, returnSecureToken: true})
      .pipe(
        tap((response: AuthResponse) => {
          this._loginHandler(response);
        })
      );
  }

  signIn(email: string, password: string): Observable<object> {
    return this.http.post(`${environment.firebase.signInUrl}${environment.firebase.apiKey}`,
      {email, password, returnSecureToken: true})
      .pipe(
        tap((response: AuthResponse) => {
          this._loginHandler(response);
        })
      );
  }

  private _loginHandler(response: AuthResponse) {
    const expirationDate = new Date(new Date().getTime() +
      (Number(response.expiresIn) * 1000));

    const user: User = new User(
      response.email,
      response.localId,
      response.idToken,
      expirationDate
    );

    this._user$.next(user);
    localStorage.setItem(environment.localStorageUser, JSON.stringify(user));
    this.autoLogout(Number(response.expiresIn) * 1000);

    if (this.router.url === '/register') {
      setTimeout(() => {
        this.router.navigate([environment.loginRedirectUrl]);
      }, 2000);
    } else {
      this.router.navigate([environment.loginRedirectUrl]);
    }
  }

  logout() {
    this._user$.next(null);
    localStorage.removeItem(environment.localStorageUser);
    this.router.navigate([environment.logoutRedirectUrl]);
  }

  autoLogin() {
    let user: {
      email: string,
      id: string,
      _token: string,
      _expirationDate: string,
    };

    const userFromLocalStorage = localStorage.getItem(environment.localStorageUser);
    if (userFromLocalStorage) {
      user = JSON.parse(userFromLocalStorage);
    } else {
      return false;
    }

    const loadedUser = new User(
      user.email,
      user.id,
      user._token,
      new Date(user._expirationDate)
    );

    if (loadedUser && loadedUser.userToken) {
      this._user$.next(loadedUser);
      const duration = new Date(user._expirationDate).getTime() - new Date().getTime();
      this.autoLogout(duration);
    }
  }

  autoLogout(duration: number) {
    setTimeout(() => {
      this.logout();
      this.errorsService.emitError({errorMessage: 'Ваша сессия истекла'});
    }, duration);
  }

}
