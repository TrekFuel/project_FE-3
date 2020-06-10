import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {NotFoundPageComponent} from './not-found-page';
import {RouterModule} from '@angular/router';
import { ErrorsComponent } from './errors/errors.component';
import { LoaderComponent } from './loader/loader.component';
import { DropdownDirective } from './header/directives/dropdown.directive';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NotFoundPageComponent,
    ErrorsComponent,
    LoaderComponent,
    DropdownDirective,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    NotFoundPageComponent,
    ErrorsComponent,
    LoaderComponent,
  ]
})
export class SharedModule {
}
