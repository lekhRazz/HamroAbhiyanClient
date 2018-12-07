import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LostService } from 'src/app/shared-service/Lost/lost.service';
import { Sendemail } from 'src/app/classes/sendemail';
import { NewsService } from 'src/app/shared-service/News/news.service';

@Component({
  selector: 'app-manage-lost-details',
  templateUrl: './manage-lost-details.component.html',
  styleUrls: ['./manage-lost-details.component.css']
})
export class ManageLostDetailsComponent implements OnInit {
  public detailId;
  lostList: any = [];
  public errorMessage = '';
  public mailResponse:any=[];
  sendEmail: Sendemail = new Sendemail();

  constructor(
    private route: ActivatedRoute,
    private lostService: LostService,
    private router: Router,
    private newsService: NewsService

  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.detailId = id;
    this.showLostDetails(this.detailId);
  }

  showLostDetails(id) {
    this.lostService.getLostRecordById(id)
      .subscribe(data => { this.lostList = data, console.log(this.lostList) },
        error => this.errorMessage = error);
  }

  shareNews(lostList){
    let newsUrl = "localhost:4200/lost/" + this.detailId;
    this.sendEmail.email = lostList.lostBy.email;
    this.sendEmail.message = "Don't miss our latest lost news.Click below the link and read latest news";
    this.sendEmail.postUrl = newsUrl;
    console.log(this.sendEmail)
    this.newsService.shareNews(this.sendEmail)
      .subscribe(data => this.mailResponse = data,
        error => this.errorMessage = error
      );

  }
}
