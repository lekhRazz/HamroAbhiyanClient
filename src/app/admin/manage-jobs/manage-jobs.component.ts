import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/shared-service/Job/job.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-jobs',
  templateUrl: './manage-jobs.component.html',
  styleUrls: ['./manage-jobs.component.css']
})
export class ManageJobsComponent implements OnInit {

  listJobs: any = [];
  errorMessage = '';

  constructor(private jobService: JobService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.showJobRecord();

  }

  showJobRecord() {
    this.jobService.getJobs()
      .subscribe(data => this.listJobs = data,
        error => this.errorMessage = error);
  }


  deleteJobData: any;
  deleteJobRecord(jobs){
    this.deleteJobData = jobs;
    $("#deleteModal").modal("show");
  }

  confirmDelete() {
    this.jobService.deleteJob(this.deleteJobData._id)
      .subscribe((data) => {
        this.listJobs.splice(this.listJobs.indexOf(this.deleteJobData), 1);
      },
        (error) => {
          console.log(error);
        });
    $("#deleteModal").modal("hide");

  }

  viewDetail(jobs){
    this.router.navigate(['/admin/jobs/',jobs._id]);
  }
}
