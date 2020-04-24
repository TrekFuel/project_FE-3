import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PostPageComponent} from './main/post-page/post-page.component';
import {AboutPageComponent} from './main/about-page/about-page.component';
import {LoginPageComponent} from './main/login-page/login-page.component';
import {RegisterPageComponent} from './main/register-page/register-page.component';
import {MainPageComponent} from './main/main-page/main-page.component';
import {SingleProductPageComponent} from './main/single-product-page/single-product-page.component';


const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'product/:id', component: SingleProductPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'post', component: PostPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
