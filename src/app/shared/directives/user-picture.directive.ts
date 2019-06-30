import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';
import {AuthenticateService} from '../../core/services/auth.service';

@Directive({
  selector: '[appUserPicture]'
})
export class UserPictureDirective implements OnInit {
  userPicturePath: string;

  constructor(private elementRef: ElementRef, private render: Renderer2, private authService: AuthenticateService) {
  }
  ngOnInit(): void {
    this.userPicturePath = this.authService.currentUserValue.photoUrl || 'assets/images/user-default.svg';
    this.render.setStyle(this.elementRef.nativeElement, 'background-image', `url(${this.userPicturePath})`);
  }
}
