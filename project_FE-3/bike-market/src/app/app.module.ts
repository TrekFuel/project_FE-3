import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FiltersColumnComponent} from './main/main-page';
import {ProductTemplateComponent} from './main/main-page';
import {FooterComponent} from './footer/footer.component';
import {AboutPageComponent} from './main/about-page';
import {PostPageComponent} from './main/post-page';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {RegisterPageComponent} from './main/register-page';
import {MainPageComponent} from './main/main-page';
import {LoginPageComponent} from './main/login-page';
import {SingleProductPageComponent} from './main/single-product-page';
import { NotFoundPageComponent } from './main/not-found-page';
import {MatTreeModule} from "@angular/material/tree";
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiltersColumnComponent,
    ProductTemplateComponent,
    FooterComponent,
    AboutPageComponent,
    PostPageComponent,
    RegisterPageComponent,
    MainPageComponent,
    LoginPageComponent,
    SingleProductPageComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTreeModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
