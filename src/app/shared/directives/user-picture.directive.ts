import {Directive, ElementRef, Input, Renderer2} from '@angular/core';
import {AuthenticateService} from '../../core/services/auth.service';

@Directive({
  selector: '[appUserPicture]'
})
export class UserPictureDirective {
  @Input() AppUserPicture: string;
  currentImage: string;

  constructor(private elementRef: ElementRef, private render: Renderer2, private authService: AuthenticateService) {
    this.currentImage = this.authService.currentUserValue.photoUrl;
    this.render.setStyle(this.elementRef.nativeElement, 'background-image', `url(${this.currentImage})`);
  }
}
