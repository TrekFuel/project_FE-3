import {Component, OnInit, ViewChild} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators
} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {AuthResponse} from '../models/auth-response.model';

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  hide = true;

  form: FormGroup;
  @ViewChild(FormGroupDirective, {static: true}) formGroupDirective:
    FormGroupDirective;

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this._initForm();
  }

  onHideShowClick() {
    this.hide = !this.hide;
    return false;
  }

  private _initForm() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(6),
        Validators.maxLength(40)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators
          .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/)
      ]),
    });
  }

  onSignIn() {
    this.authService.signIn(this.email.value, this.password.value)
      .subscribe((data: AuthResponse) => {
        this.formGroupDirective.resetForm();
      });
  }
}
