import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

import { User } from 'src/app/classes/user';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signInForm: FormGroup;
  user: User;
  constructor(private formBuilder: FormBuilder) { }

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
    console.warn(this.signInForm.value);
  }
}
