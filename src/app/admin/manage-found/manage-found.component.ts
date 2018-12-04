import { Component, OnInit } from '@angular/core';
import { FoundService } from 'src/app/shared-service/Found/found.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-found',
  templateUrl: './manage-found.component.html',
  styleUrls: ['./manage-found.component.css']
})
export class ManageFoundComponent implements OnInit {

  errorMessage = '';
  listFound:any=[];

  constructor(private foundService: FoundService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.showFoundRecords();

  }
  showFoundRecords(){
    this.foundService.getFoundReports()
                     .subscribe(data=>this.listFound=data,
                       error=>this.errorMessage=error);
  }
 

}
