import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/shared-service/News/news.service';

@Component({
  selector: 'app-manage-news-details',
  templateUrl: './manage-news-details.component.html',
  styleUrls: ['./manage-news-details.component.css']
})
export class ManageNewsDetailsComponent implements OnInit {

  newsList: any = [];
  errorMessage = '';
  public detailId;
  public imageUrl = '';
  mailResponse: any = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.detailId = id;
    this.showNewsDetails(this.detailId);
    console.log(this.router.url);
  }

  showNewsDetails(id) {
    this.newsService.getNewsById(this.detailId)
      .subscribe(data => this.newsList = data,
        error => this.errorMessage = error);
  }

  shareNews(news) {
    let newsUrl = "Don't miss our latest news.Click below the link and read latest news" + " " + "localhost:4200/" + this.detailId;
    let reporterEmail = news.createdBy.email;
    console.log(newsUrl);
    console.log(reporterEmail);
    this.newsService.shareNews(newsUrl, reporterEmail)
      .subscribe(data => this.mailResponse = data,
        error => this.errorMessage = error
      );

  }

}
