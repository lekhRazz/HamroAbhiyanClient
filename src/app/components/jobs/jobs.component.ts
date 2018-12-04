import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from 'src/app/shared-service/Job/job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  postJobForm: FormGroup;
  submitted = false;
  errorMessage = '';
  listJobs: any = [];

  constructor(private jobService: JobService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.createForm();
    this.showJobRecord();
  }
  get post() { return this.postJobForm.get('post'); }
  get emplyNumber() { return this.postJobForm.get('emplyNumber'); }
  get salary() { return this.postJobForm.get('salary'); }
  get officeName() { return this.postJobForm.get('officeName'); }
  get address() { return this.postJobForm.get('address'); }
  get phone() { return this.postJobForm.get('phone'); }
  get description() { return this.postJobForm.get('description'); }
  get deadLine() { return this.postJobForm.get('deadLine'); }

  createForm() {
    this.postJobForm = this.formBuilder.group({
      'post': ['', [Validators.required, Validators.minLength(3)]],
      'emplyNumber': ['', [Validators.required, Validators.min(1)]],
      'salary': ['', Validators.required],
      'officeName': ['', [Validators.required, Validators.minLength(4)]],
      'address': ['', [Validators.required, Validators.minLength(4)]],
      'phone': ['', Validators.required],
      'email': [''],
      'description': ['', [Validators.required, Validators.minLength(10)]],
      'file': [''],
      'deadLine': ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = false;
    this.jobService.createJobs(this.postJobForm.value)
      .subscribe(data => console.log('success', data),
        error => this.errorMessage = error.statusText);
  }

  showJobRecord() {
    this.jobService.getJobs()
      .subscribe(data => this.listJobs = data,
        error => this.errorMessage = error);
  }
}
