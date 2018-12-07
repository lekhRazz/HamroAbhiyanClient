import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
// import { } from '';
import { UserService } from 'src/app/shared-service/User/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { phoneValidator, passValidator } from '../validators/custom-validator';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  submitted = false;
  errorMessage = '';
  userForm: User = new User();

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();

  }



  get name() { return this.signUpForm.get('name'); }
  get address() { return this.signUpForm.get('address'); }
  get phone() { return this.signUpForm.get('phone'); }
  get email() { return this.signUpForm.get('email'); }
  get password() { return this.signUpForm.get('password'); }


  onSubmit() {
    this.userForm.address = this.signUpForm.value.address;
    this.userForm.email = this.signUpForm.value.email;
    this.userForm.name = this.signUpForm.value.name;
    this.userForm.phone = this.signUpForm.value.phone;
    this.userForm.password = this.signUpForm.value.password;
    // this.userForm.isAdmin=false;
    console.log(this.signUpForm);
    console.log(this.userForm);
    this.userService.saveUser(this.userForm)
      .subscribe(data => console.log('success', data),
        error => this.errorMessage = error.statusText);
    this.router.navigate(['/login']);
  }


  createForm() {

    this.signUpForm = this.formBuilder.group({
      'name': ['', [Validators.required, Validators.minLength(5)]],
      'address': ['', [Validators.required, Validators.minLength(5)]],
      'phone': ['', [Validators.required]],
      'email': ['', [Validators.required,
      Validators.minLength(8)]],
      'password': ['', [Validators.required, Validators.minLength(5)]],
      'confirmPassword': ['', passValidator]
    });
  }

}
