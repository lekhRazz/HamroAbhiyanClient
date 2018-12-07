import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/shared-service/User/user.service';
import { Router } from '@angular/router';
import { tokenKey } from '@angular/core/src/view';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signInForm: FormGroup;
  public userResponse: any = [];
  public errorMessage = '';
  user: User = new User();

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();
  }
  get email() { return this.signInForm.get('email'); }

  createForm() {
    this.signInForm = this.formBuilder.group({
      'email': ['', [Validators.required,
      Validators.minLength(8)]],
      'password': ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.signInForm.value);
    this.userService.loginUser(this.signInForm.value)
      .subscribe(data => {
        this.userResponse = data,
          console.log(this.userResponse);
        this.setToken(this.userResponse.token, this.userResponse.user._id, this.userResponse.user.name);
        if (this.userResponse.user.isAdmin === true) {
          this.router.navigate(['/dashboard']);
        } else {
          this.router.navigate(['/'])
        }
      },
        error => this.errorMessage = "login error");
  }

  setToken(token: any, id: any, name: any) {
    if (typeof window != "undefined") {
      window.localStorage.setItem('x-auth-token', token);
      window.localStorage.setItem('id', id);
      window.localStorage.setItem('name', name);
    }
  }
}
