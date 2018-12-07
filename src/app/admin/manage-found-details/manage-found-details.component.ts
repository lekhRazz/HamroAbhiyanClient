import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoundService } from 'src/app/shared-service/Found/found.service';
import { NewsService } from 'src/app/shared-service/News/news.service';
import { Sendemail } from 'src/app/classes/sendemail';

@Component({
  selector: 'app-manage-found-details',
  templateUrl: './manage-found-details.component.html',
  styleUrls: ['./manage-found-details.component.css']
})
export class ManageFoundDetailsComponent implements OnInit {

  public detailId;
  foundList: any = [];
  public errorMessage = '';
  sendEmail: Sendemail = new Sendemail();
  public mailResponse:any=[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private foundService: FoundService,
    private newsService: NewsService

  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.detailId = id;
    this.showFoundDetails(this.detailId);
  }
  showFoundDetails(id) {
    this.foundService.getFoundById(id)
      .subscribe(data => this.foundList = data,
        error => this.errorMessage = error);
  }
  shareNews(foundList){
    let newsUrl = "localhost:4200/found/" + this.detailId;
    this.sendEmail.email = foundList.foundBy.email;
    this.sendEmail.message = "Don't miss our latest found news.Click below the link and read latest news";
    this.sendEmail.postUrl = newsUrl;
    console.log(this.sendEmail)
    this.newsService.shareNews(this.sendEmail)
      .subscribe(data => this.mailResponse = data,
        error => this.errorMessage = error
      );
  }
}
