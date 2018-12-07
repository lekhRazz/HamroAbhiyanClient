import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/shared-service/News/news.service';
import { Sendemail } from 'src/app/classes/sendemail';

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
  sendEmail: Sendemail = new Sendemail();

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
    let newsUrl = "localhost:4200/news/" + this.detailId;
    this.sendEmail.email = news.createdBy.email;
    this.sendEmail.message = "Don't miss our latest news.Click below the link and read latest news";
    this.sendEmail.postUrl = newsUrl;
    console.log(this.sendEmail)
    this.newsService.shareNews(this.sendEmail)
      .subscribe(data => this.mailResponse = data,
        error => this.errorMessage = error
      );

  }

}
