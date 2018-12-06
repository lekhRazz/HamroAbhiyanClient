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
  errorMessage = '';
  newsList: any = [];
  selectedFile: File = null;
  constructor(private newsService: NewsService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.createForm();
    this.showNewsPage();
  }

  get title() { return this.postNewsForm.get('title'); }
  get description() { return this.postNewsForm.get('description'); }

  createForm() {
    this.postNewsForm = this.formBuilder.group({
      'title': ['', [Validators.required, Validators.minLength(10)]],
      'description': ['', [Validators.required, Validators.minLength(50)]]
    });
  }

  selectFile(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    console.log(this.postNewsForm.value);
    this.newsService.createNews(this.postNewsForm.value, this.selectedFile)
      .subscribe(data => console.log('success', data),
        error => this.errorMessage = error.statusText);
    this.router.navigate(['/']);
  }

  showNewsPage() {
    this.newsService.getNews()
      .subscribe(data => {
        this.newsList = data;
        console.log(this.newsList);
      },
        error => this.errorMessage = error);

  }

  viewDetail(nws){
    this.router.navigate(['/postnews/',nws._id]);
  }
}
