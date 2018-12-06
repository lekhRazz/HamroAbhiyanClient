import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { NewsService } from 'src/app/shared-service/News/news.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-newsdetails',
  templateUrl: './newsdetails.component.html',
  styleUrls: ['./newsdetails.component.css']
})
export class NewsdetailsComponent implements OnInit {

  newsList: any = [];
  errorMessage='';
  public detailId;
  constructor(private route:ActivatedRoute,private newsService: NewsService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    let id=this.route.snapshot.paramMap.get('id');
    this.detailId=id;
  this.showNewsDetails(this.detailId);
  console.log(this.router.url);
  }

  showNewsDetails(id){
    this.newsService.getNewsById(this.detailId)
                    .subscribe(data=>this.newsList=data,
                      error=>this.errorMessage=error);
  }

  shareNews(news){
    let newsUrl=this.router.url;
    let reporterEmail=news.createdBy.email;
    console.log(newsUrl);
    console.log(reporterEmail);

  }
}
