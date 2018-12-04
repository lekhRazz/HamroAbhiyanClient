import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/shared-service/News/news.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managenews',
  templateUrl: './managenews.component.html',
  styleUrls: ['./managenews.component.css']
})
export class ManagenewsComponent implements OnInit {

  newsList:any = [];
  errorMessage = '';

  constructor(private newsService: NewsService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.showNewsPage();

  }

  showNewsPage(){
    this.newsService.getNews()
          .subscribe(data=> this.newsList=data,
          error=>this.errorMessage=error);
  }
}
