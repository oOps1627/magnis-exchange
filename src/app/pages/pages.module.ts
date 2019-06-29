import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
  NotFoundComponent],
  exports: [
  ],
  imports: [
    CommonModule,
    HomeModule,
    AuthModule
  ]
})
export class PagesModule { }
