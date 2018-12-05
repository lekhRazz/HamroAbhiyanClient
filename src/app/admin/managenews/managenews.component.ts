import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/shared-service/News/news.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgSwitch } from '@angular/common';

@Component({
  selector: 'app-managenews',
  templateUrl: './managenews.component.html',
  styleUrls: ['./managenews.component.css']
})
export class ManagenewsComponent implements OnInit {

  newsList: any = [];
  errorMessage = '';

  constructor(private newsService: NewsService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.showNewsPage();

  }

  showNewsPage() {
    this.newsService.getNews()
      .subscribe(data => this.newsList = data,
        error => this.errorMessage = error);
  }


  deleteNewsData: any;
  deleteNews(nws) {
    this.deleteNewsData = nws;
    $("#deleteModal").modal("show");
  }

  confirmDelete() {
    this.newsService.deleteNews(this.deleteNewsData._id)
      .subscribe((data) => {
        this.newsList.splice(this.newsList.indexOf(this.deleteNewsData), 1);
      },
        (error) => {
          console.log(error);
        });
    $("#deleteModal").modal("hide");

  }

  newsDetailList:any;
  viewDetail(nws) {
    this.newsService.getNewsById(nws._id)
                    .subscribe(data=>this.newsDetailList=data,
                      error=>this.errorMessage=error);
  }
}
