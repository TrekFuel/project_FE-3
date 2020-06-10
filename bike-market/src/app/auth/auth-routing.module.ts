import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginPageComponent} from './login-page';
import {RegisterPageComponent} from './register-page';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterPageComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
