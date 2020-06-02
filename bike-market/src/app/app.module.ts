import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireStorageModule, BUCKET} from '@angular/fire/storage';
import {SharedModule} from './shared/shared.module';
import {AuthModule} from './auth/auth.module';
import {MainModule} from './main/main.module';

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
    {provide: BUCKET, useValue: 'gs://bike-market-7b14d.appspot.com'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
