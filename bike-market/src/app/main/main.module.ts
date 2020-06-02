import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  FiltersColumnComponent,
  MainPageComponent,
  ProductTemplateComponent
} from './main-page';
import {SingleProductPageComponent} from './single-product-page';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTreeModule} from '@angular/material/tree';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MainRoutingModule} from './main-routing.module';


@NgModule({
  declarations: [
    MainPageComponent,
    FiltersColumnComponent,
    ProductTemplateComponent,
    SingleProductPageComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatTreeModule,
    MatCheckboxModule,
    MatRadioModule,
    MainRoutingModule
  ],
  exports: [
    MainPageComponent,
    FiltersColumnComponent,
    ProductTemplateComponent,
    SingleProductPageComponent,
  ]
})
export class MainModule {
}
