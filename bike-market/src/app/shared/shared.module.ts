import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {NotFoundPageComponent} from './not-found-page';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NotFoundPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    NotFoundPageComponent,
  ]
})
export class SharedModule {
}
