import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../../../core/services/auth.service';
import { User } from '../../../../core/models/user';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  currentUser: User;
  constructor(private authService: AuthenticateService) { }

  ngOnInit() {
    this.currentUser = this.authService.currentUserValue;
  }

}
