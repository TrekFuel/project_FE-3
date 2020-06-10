import {Component, OnInit, ViewChild} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators
} from '@angular/forms';
import {CustomValidators} from './validators/custom.validators';
import {AuthService} from '../services/auth.service';
import {AuthResponse} from '../models/auth-response.model';

@Component({
  selector: 'app-register',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  hide = true;
  isRegistered = false;
  registeredEmail: string;

  form: FormGroup;
  @ViewChild(FormGroupDirective, {static: true}) formGroupDirective:
    FormGroupDirective;

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get repeatPassword() {
    return this.form.get('repeatPassword');
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
      repeatPassword: new FormControl('', [
        Validators.required,
        Validators
          .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/)
      ]),
    }, CustomValidators.equalPasswords('password', 'repeatPassword'));
  }

  onSignUp() {
    this.authService.signUp(this.email.value, this.password.value)
      .subscribe((data: AuthResponse) => {
        this.formGroupDirective.resetForm();
        this.registeredEmail = data.email;
        this.onSuccessSignUp();
      });
  }

  onSuccessSignUp() {
    this.isRegistered = true;
    setTimeout(() => {
      this.isRegistered = false;
    }, 5000);
  }
}
