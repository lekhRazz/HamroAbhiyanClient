import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { FoundService } from 'src/app/shared-service/Found/found.service';

@Component({
  selector: 'app-found',
  templateUrl: './found.component.html',
  styleUrls: ['./found.component.css']
})
export class FoundComponent implements OnInit {

  postFoundGoodForm: FormGroup;
  submitted = false;
  errorMessage = '';
  listFound:any=[];
  constructor(private foundService: FoundService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.createForm();
    this.showFoundRecords();
  }

  get goodsName() { return this.postFoundGoodForm.get('goodsName'); }
  get description() { return this.postFoundGoodForm.get('description'); }
  get date() { return this.postFoundGoodForm.get('date'); }
  get location() { return this.postFoundGoodForm.get('location'); }
  get contact() { return this.postFoundGoodForm.get('contact'); }


  createForm() {
    this.postFoundGoodForm = this.formBuilder.group({
      'goodsName': ['', [Validators.required, Validators.minLength(3)]],
      'description': ['', [Validators.required, Validators.minLength(20)]],
      'location': ['', [Validators.required, Validators.minLength(4)]],
      'contact': ['', [Validators.required]],
      'file': [''],
      'date': ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.postFoundGoodForm.value);
    this.foundService.createFoundReport(this.postFoundGoodForm.value)
      .subscribe(data => console.log('success', data),
        error => this.errorMessage = error.statusText)
  }
 showFoundRecords(){
   this.foundService.getFoundReports()
                    .subscribe(data=>this.listFound=data,
                      error=>this.errorMessage=error);
 }

}
