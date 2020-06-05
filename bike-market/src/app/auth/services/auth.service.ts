import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  signUp(email: string, password: string): Observable<object> {
    return this.http.post(`${environment.firebase.signUpUrl}${environment.firebase.apiKey}`,
      {email, password, returnSecureToken: true});
  }

  signIn(email: string, password: string): Observable<object> {
    return this.http.post(`${environment.firebase.signInUrl}${environment.firebase.apiKey}`,
      {email, password, returnSecureToken: true});
  }

}
