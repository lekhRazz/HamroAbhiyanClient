import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/shared-service/Job/job.service';
import { Sendemail } from 'src/app/classes/sendemail';
import { NewsService } from 'src/app/shared-service/News/news.service';

@Component({
  selector: 'app-manage-job-details',
  templateUrl: './manage-job-details.component.html',
  styleUrls: ['./manage-job-details.component.css']
})
export class ManageJobDetailsComponent implements OnInit {

  public detailId;
  jobList: any = [];
  public errorMessage = '';
  sendEmail: Sendemail = new Sendemail();
  public mailResponse:any=[];
  
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private jobService:JobService,
    private newsService: NewsService

    ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.detailId = id;
    this.showJobDetails(this.detailId);
  }

  showJobDetails(id){
    this.jobService.getJobsById(id)
                    .subscribe(data=>this.jobList=data,
                      error=>this.errorMessage=error);
  }

  shareNews(jobList){
    let newsUrl = "localhost:4200/jobs/" + this.detailId;
    this.sendEmail.email = jobList.postedBy.email;
    this.sendEmail.message = "Don't miss our latest job vacancy.Click below the link and read latest vacancy";
    this.sendEmail.postUrl = newsUrl;
    console.log(this.sendEmail)
    this.newsService.shareNews(this.sendEmail)
      .subscribe(data => this.mailResponse = data,
        error => this.errorMessage = error
      );
  }
}
