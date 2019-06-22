import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  loginWithGoogle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) => {
      console.log(data);
    });
  }

}
