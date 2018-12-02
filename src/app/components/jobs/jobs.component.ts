import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  postJobForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }
  get post() { return this.postJobForm.get('post'); }
  get emplyNumber() { return this.postJobForm.get('emplyNumber'); }
  get salary() { return this.postJobForm.get('salary'); }
  get officeName() { return this.postJobForm.get('officeName'); }
  get address() { return this.postJobForm.get('address'); }
  get phone() { return this.postJobForm.get('phone'); }
  get description() { return this.postJobForm.get('description'); }

  createForm() {
    this.postJobForm = this.formBuilder.group({
      'post': ['', Validators.required],
      'emplyNumber': ['', Validators.required],
      'salary': ['', Validators.required],
      'officeName': ['', Validators.required],
      'address': ['', Validators.required],
      'phone': ['', Validators.required],
      'email': [''],
      'description': ['', Validators.required],
      'file': ['']
    });
  }
}
