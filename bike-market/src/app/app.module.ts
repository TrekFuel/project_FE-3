import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FiltersColumnComponent } from './filters-column/filters-column.component';
import { SubfiltersColumnComponent } from './filters-column/subfilters-column/subfilters-column.component';
import { ProductTemplateComponent } from './product-template/product-template.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiltersColumnComponent,
    SubfiltersColumnComponent,
    ProductTemplateComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
