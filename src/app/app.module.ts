import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AppComponent } from './app.component';
import { fakeBackendProvider } from './helpers/fakeBackend';

import { SocialLoginModule, AuthServiceConfig, LoginOpt } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

const googleLoginOptions: LoginOpt = {
  scope: 'profile email'
};

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('112888989739-tlqh9dcdia1o73r4adu5h73vqfsrr833', googleLoginOptions)
  }
]);

export function provideConfig() {
  return config;
}

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
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
