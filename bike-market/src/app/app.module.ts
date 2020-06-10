import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireStorageModule, BUCKET} from '@angular/fire/storage';
import {SharedModule} from './shared/shared.module';
import {AuthModule} from './auth/auth.module';
import {MainModule} from './main/main.module';
import {ErrorsInterceptor} from './shared/errors/interceptors/errors.interceptor';
import {LoaderInterceptor} from './shared/loader/interceptors/loader.interceptor';
import {AuthInterceptor} from './auth/interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    SharedModule,
    AuthModule,
    MainModule,
  ],
  providers: [
    {provide: BUCKET, useValue: 'gs://bike-market-7b14d.appspot.com'},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorsInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
