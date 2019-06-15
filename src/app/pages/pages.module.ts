import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
  LoginComponent],
  exports: [
  ],
  imports: [
    CommonModule,
    HomeModule
  ]
})
export class PagesModule { }
