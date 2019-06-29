import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private authService: AuthenticateService, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4)
      ]),
      rememberMe: new FormControl(false)
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  login() {
    this.submitted = true;
    if (this.loginForm.valid) {
      const username = this.f.username.value;
      const password = this.f.password.value;
      const rememberMe = this.f.rememberMe.value;
      this.authService.login(username, password, rememberMe).subscribe(() => {
        this.router.navigate(['/']);
      }, err => {
        console.log(err);
      });
    }
  }

}
