import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/shared-service/User/user.service';
import { Router } from '@angular/router';



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
        this.user = data,
          // console.log(this.user);
        this.userService.setter(this.user);
        if (this.user.isAdmin === true) {
          this.router.navigate(['/dashboard']);
        } else {
          this.router.navigate(['/'])
        }
      },
        error => this.errorMessage = error);
    console.log("this.userResponse");
  }


}
