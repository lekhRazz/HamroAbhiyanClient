import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AwarenessService } from 'src/app/shared-service/Awareness/awareness.service';
import { Sendemail } from 'src/app/classes/sendemail';
import { NewsService } from 'src/app/shared-service/News/news.service';

@Component({
  selector: 'app-manage-awareness-details',
  templateUrl: './manage-awareness-details.component.html',
  styleUrls: ['./manage-awareness-details.component.css']
})
export class ManageAwarenessDetailsComponent implements OnInit {

  public detailId;
  awarenessList: any = [];
  public errorMessage = '';
  sendEmail: Sendemail = new Sendemail();
  public mailResponse:any=[];

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private awrnsService:AwarenessService,
    private newsService: NewsService

    ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.detailId = id;
    this.showAwarenessDetails(this.detailId);
  }
  showAwarenessDetails(id){
    this.awrnsService.getAwarenessById(id)
                      .subscribe(data=>this.awarenessList=data,
                        error=>this.errorMessage=error);
  }

  shareNews(awarenessList){
    let newsUrl = "localhost:4200/awareness/" + this.detailId;
    this.sendEmail.email = awarenessList.postedBy.email;
    this.sendEmail.message = "Don't miss our latest awareness news.Click below the link and read awareness news";
    this.sendEmail.postUrl = newsUrl;
    console.log(this.sendEmail)
    this.newsService.shareNews(this.sendEmail)
      .subscribe(data => this.mailResponse = data,
        error => this.errorMessage = error
      );
  }
}
