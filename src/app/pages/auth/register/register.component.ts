import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { MustMatch } from '../../../helpers/mustMatch.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      confirmPassword: new FormControl(null, Validators.required)
    }, {validator: MustMatch('password', 'confirmPassword')});
  }

  register() {
    this.submitted = true;
    if (this.registerForm.valid) {

    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

}
