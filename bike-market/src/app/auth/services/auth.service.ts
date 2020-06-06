import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../models/user.model';
import {tap} from 'rxjs/operators';
import {AuthResponse} from '../models/auth-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user$: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  get userSubject$() {
    return this._user$;
  }

  constructor(private http: HttpClient) {
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
    const user: User = new User(response.email, response.localId,
      response.idToken, expirationDate);
    this._user$.next(user);
  }

}
