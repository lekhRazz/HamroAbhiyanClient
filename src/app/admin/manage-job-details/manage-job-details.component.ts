import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/shared-service/Job/job.service';

@Component({
  selector: 'app-manage-job-details',
  templateUrl: './manage-job-details.component.html',
  styleUrls: ['./manage-job-details.component.css']
})
export class ManageJobDetailsComponent implements OnInit {

  public detailId;
  jobList: any = [];
  public errorMessage = '';
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private jobService:JobService
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
}
