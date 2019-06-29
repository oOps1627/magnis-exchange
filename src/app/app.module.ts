import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AppComponent } from './app.component';
import { fakeBackendProvider } from './helpers/fakeBackend';

import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { oauthProvideConfig } from './helpers/oauth.config';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [
    fakeBackendProvider,
    {
      provide: AuthServiceConfig,
      useFactory: oauthProvideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
