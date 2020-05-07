import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainPageComponent} from './main/main-page';
import {SingleProductPageComponent} from './main/single-product-page';
import {AboutPageComponent} from './main/about-page';
import {PostPageComponent} from './main/post-page';
import {LoginPageComponent} from './main/login-page';
import {RegisterPageComponent} from './main/register-page';
import {NotFoundPageComponent} from './main/not-found-page';


const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'filters', component: MainPageComponent},
  {path: 'products/:id', component: SingleProductPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'post', component: PostPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
