import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/shared-service/News/news.service';
import { UserService } from 'src/app/shared-service/User/user.service';
import { User } from 'src/app/classes/user';

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
  user:User=new User();
  public userId;

  constructor(
    private newsService: NewsService,
    private formBuilder: FormBuilder,
    private router: Router,
    private userService:UserService
  ) { }

  ngOnInit() {
    this.createForm();
    this.showNewsPage();
    console.log("message here");
    console.log(this.userService.getUserId());
  }

  get title() { return this.postNewsForm.get('title'); }
  get description() { return this.postNewsForm.get('description'); }

  createForm() {
    this.postNewsForm = this.formBuilder.group({
      'title': ['', [Validators.required, Validators.minLength(10)]],
      'description': ['', [Validators.required, Validators.minLength(50)]],
      'createdBy':[this.userService.getUserId()]
    });
  }

  selectFile(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    let id = this.userService.getUserId();
    this.userId = id;
    if (this.userId===null) {
      this.errorMessage="please login before uploading record";
    } else{
      console.log(this.postNewsForm.value);
      this.newsService.createNews(this.postNewsForm.value, this.selectedFile)
        .subscribe(data => console.log('success', data),
          error => this.errorMessage = error.statusText);
      this.postNewsForm.reset();
     
    }
    
  }

  showNewsPage() {
    this.newsService.getNews()
      .subscribe(data => {
        this.newsList = data;
        console.log(this.newsList);
      },
        error => this.errorMessage = error);

  }

  viewDetail(nws) {
    this.router.navigate(['/news/', nws._id]);
  }
}
