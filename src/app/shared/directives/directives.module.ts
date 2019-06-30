import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserPictureDirective} from './user-picture.directive';

@NgModule({
  declarations: [UserPictureDirective],
  exports: [UserPictureDirective],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
