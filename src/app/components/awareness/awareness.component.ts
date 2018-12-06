import { Component, AfterViewInit, OnInit } from '@angular/core';
// import Swal from 'sweetalert2';

import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { AwarenessService } from 'src/app/shared-service/Awareness/awareness.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-awareness',
  templateUrl: './awareness.component.html',
  styleUrls: ['./awareness.component.css']
})
export class AwarenessComponent implements OnInit {

  awarenessForm: FormGroup;
  submitted = false;
  errorMessage = '';
  awarenessList: any = [];
  selectedFile: File = null;

  constructor(private awrnService: AwarenessService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.createForm();
    this.showAwareness();
  }

  get title() { return this.awarenessForm.get('title'); }
  get description() { return this.awarenessForm.get('description'); }

  createForm() {
    this.awarenessForm = this.formBuilder.group({
      'title': ['', [Validators.required, Validators.minLength(10)]],
      'description': ['', [Validators.required, Validators.minLength(50)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.awarenessForm.value);
    this.awrnService.createNews(this.awarenessForm.value, this.selectedFile)
      .subscribe(data => console.log('success', data),
        error => this.errorMessage = error.statusText);
    this.router.navigate(['/']);
  }
  showAwareness() {
    this.awrnService.getAwarenesses()
      .subscribe(data => this.awarenessList = data,
        error => this.errorMessage = error);
  }

  selectFile(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];
  }
  viewDetail(nws){
    this.router.navigate(['/awareness/',nws._id]);
  }
}
