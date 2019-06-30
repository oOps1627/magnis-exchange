import {Directive, ElementRef, Input, Renderer2} from '@angular/core';
import {AuthenticateService} from '../../core/services/auth.service';

@Directive({
  selector: '[appUserPicture]'
})
export class UserPictureDirective {
  @Input() AppUserPicture: string;
  userPicture: string;

  constructor(private elementRef: ElementRef, private render: Renderer2, private authService: AuthenticateService) {
    this.userPicture = this.authService.currentUserValue.photoUrl || 'assets/images/user-default.svg';
    this.render.setStyle(this.elementRef.nativeElement, 'background-image', `url(${this.userPicture})`);
  }
}
