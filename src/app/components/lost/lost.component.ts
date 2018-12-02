import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lost',
  templateUrl: './lost.component.html',
  styleUrls: ['./lost.component.css']
})
export class LostComponent implements OnInit {

  postLostGoodForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  get goodsName() { return this.postLostGoodForm.get('goodsName'); }
  get description() { return this.postLostGoodForm.get('description'); }
  get date() { return this.postLostGoodForm.get('date'); }

  createForm() {
    this.postLostGoodForm = this.formBuilder.group({
      'goodsName': ['', Validators.required],
      'description': ['', Validators.required],
      'file': [''],
      'date': ['', Validators.required]
    })
  }

}
