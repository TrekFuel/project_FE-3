import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainPageComponent} from './main-page';
import {SingleProductPageComponent} from './single-product-page';

const routes: Routes = [
  {path: 'filters', component: MainPageComponent},
  {path: 'products/:id', component: SingleProductPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
