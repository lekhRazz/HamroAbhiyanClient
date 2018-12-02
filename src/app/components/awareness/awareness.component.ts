import { Component, AfterViewInit, OnInit } from '@angular/core';
// import Swal from 'sweetalert2';

import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-awareness',
  templateUrl: './awareness.component.html',
  styleUrls: ['./awareness.component.css']
})
export class AwarenessComponent implements OnInit {

  awarenessForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  get title() { return this.awarenessForm.get('title'); }
  get description() { return this.awarenessForm.get('description'); }

  createForm() {
    this.awarenessForm = this.formBuilder.group({
      'title': ['', Validators.required],
      'description': ['', Validators.required],
      'file': [''],
      'date': ['']
    });
  }

  onSubmit(){

  }

}
