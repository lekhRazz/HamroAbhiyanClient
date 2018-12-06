import { Component, OnInit } from '@angular/core';
import { LostService } from 'src/app/shared-service/Lost/lost.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-lost',
  templateUrl: './manage-lost.component.html',
  styleUrls: ['./manage-lost.component.css']
})
export class ManageLostComponent implements OnInit {


  submitted = false;
  errorMessage = '';
  lostItemList: any = [];

  constructor(private lostService: LostService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.showLostRecords();

  }

  showLostRecords() {
    this.lostService.getLostRecords()
      .subscribe(data => this.lostItemList = data,
        error => this.errorMessage = error);
  }

  deleteLostData: any;
  deleteLostRecord(lstItm) {
    this.deleteLostData = lstItm;
    $("#deleteModal").modal("show");
  }

  confirmDelete() {
    this.lostService.deleteLostRecord(this.deleteLostData._id)
      .subscribe((data) => {
        this.lostItemList.splice(this.lostItemList.indexOf(this.deleteLostData), 1);
      },
        (error) => {
          console.log(error);
        });
    $("#deleteModal").modal("hide");
  }

  viewDetail(lstItm){
    this.router.navigate(['/admin/lost/',lstItm._id]);
  }
}
