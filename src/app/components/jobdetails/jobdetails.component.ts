import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/shared-service/Job/job.service';

@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.component.html',
  styleUrls: ['./jobdetails.component.css']
})
export class JobdetailsComponent implements OnInit {

  public detailId;
  jobList: any = [];
  public errorMessage = '';
  constructor(private route:ActivatedRoute,private router:Router,private jobService:JobService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.detailId = id;
    this.showLostDetails(this.detailId);
  }

  showLostDetails(id){
    this.jobService.getJobsById(id)
                    .subscribe(data=>this.jobList=data,
                      error=>this.errorMessage=error);
  }
}
