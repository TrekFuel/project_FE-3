import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {NotFoundPageComponent} from './shared/not-found-page';
import {MainPageComponent} from './main/main-page';
import {MainPageResolver} from './main/main-page/resolvers/main-page.resolver';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    resolve: {productsPart: MainPageResolver},
  },
  {
    path: 'filters',
    redirectTo: 'filters',
    pathMatch: 'full'
  },
  {
    path: 'products/:id',
    redirectTo: 'products/:id',
    pathMatch: 'full'
  },
  {
    path: 'about',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
  },
  {
    path: 'post',
    redirectTo: 'post',
    pathMatch: 'full'
  },
  {
    path: 'post',
    loadChildren: () => import('./post/post.module').then(m => m.PostModule),
  },
  {
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: NotFoundPageComponent,
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
