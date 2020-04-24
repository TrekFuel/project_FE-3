import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FiltersColumnComponent} from './main/main-page/filters-column/filters-column.component';
import {SubfiltersColumnComponent} from './main/main-page/filters-column/subfilters-column/subfilters-column.component';
import {ProductTemplateComponent} from './main/main-page/product-template/product-template.component';
import {FooterComponent} from './footer/footer.component';
import {AboutPageComponent} from './main/about-page/about-page.component';
import {PostPageComponent} from './main/post-page/post-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {RegisterPageComponent} from './main/register-page/register-page.component';
import {MainPageComponent} from './main/main-page/main-page.component';
import {LoginPageComponent} from './main/login-page/login-page.component';
import {SingleProductPageComponent} from './main/single-product-page/single-product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiltersColumnComponent,
    SubfiltersColumnComponent,
    ProductTemplateComponent,
    FooterComponent,
    AboutPageComponent,
    PostPageComponent,
    RegisterPageComponent,
    MainPageComponent,
    LoginPageComponent,
    SingleProductPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
