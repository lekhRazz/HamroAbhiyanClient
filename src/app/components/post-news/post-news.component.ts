import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/shared-service/News/news.service';

@Component({
  selector: 'app-post-news',
  templateUrl: './post-news.component.html',
  styleUrls: ['./post-news.component.css']
})
export class PostNewsComponent implements OnInit {

  postNewsForm: FormGroup;
  constructor(private newsService: NewsService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }
  
  get title() { return this.postNewsForm.get('title'); }
  get description() { return this.postNewsForm.get('description'); }

  createForm() {
    this.postNewsForm = this.formBuilder.group({
      'title': ['', Validators.required],
      'description': ['', Validators.required],
      'file': [''],
      'date': [Date.now()]
    });
  }

  onSubmit() {
    console.log(this.postNewsForm.value);
  }
}
