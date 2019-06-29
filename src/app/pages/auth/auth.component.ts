import { Component, OnInit } from '@angular/core';

import { AuthenticateService } from '../../core/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthenticateService) {
  }

  ngOnInit() {
    this.authService.logout();
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle();

  }

}
