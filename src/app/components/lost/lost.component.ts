import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { LostService } from 'src/app/shared-service/Lost/lost.service';

@Component({
  selector: 'app-lost',
  templateUrl: './lost.component.html',
  styleUrls: ['./lost.component.css']
})
export class LostComponent implements OnInit {

  postLostGoodForm: FormGroup;
  submitted = false;
  errorMessage = '';

  constructor(private lostService:LostService,private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  get goodsName() { return this.postLostGoodForm.get('goodsName'); }
  get description() { return this.postLostGoodForm.get('description'); }
  get date() { return this.postLostGoodForm.get('date'); }
  get location() { return this.postLostGoodForm.get('location'); }
  get contact() { return this.postLostGoodForm.get('contact'); }

  createForm() {
    this.postLostGoodForm = this.formBuilder.group({
      'goodsName': ['', [Validators.required,Validators.minLength(3)]],
      'location': ['', [Validators.required,Validators.minLength(4)]],
      'contact': ['', [Validators.required]],
      'description': ['', [Validators.required,Validators.minLength(20)]],
      'file': [''],
      'date': ['', Validators.required]
    });
  }


  onSubmit() {
    this.submitted=true;
    console.log(this.postLostGoodForm.value);
    this.lostService.createLostReport(this.postLostGoodForm.value)
                    .subscribe(data => console.log('success',data),
                    error=> this.errorMessage=error.statusText)
  }
}
