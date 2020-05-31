import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainPageComponent} from './main/main-page';
import {SingleProductPageComponent} from './main/single-product-page';
import {AboutPageComponent} from './main/about-page';
import {PostPageComponent} from './main/post-page';
import {LoginPageComponent} from './main/login-page';
import {RegisterPageComponent} from './main/register-page';
import {NotFoundPageComponent} from './main/not-found-page';
import {PostPageResolver} from './main/post-page/post-page.resolver';
import {MainPageResolver} from './main/main-page/main-page.resolver';


const routes: Routes = [
  {
    path: '', component: MainPageComponent,
    resolve: {productsPart: MainPageResolver}
  },
  {path: 'filters', component: MainPageComponent},
  {path: 'products/:id', component: SingleProductPageComponent},
  {path: 'about', component: AboutPageComponent},
  {
    path: 'post',
    component: PostPageComponent,
    resolve: {postId: PostPageResolver}
  },
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
