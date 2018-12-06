import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LostService } from 'src/app/shared-service/Lost/lost.service';

@Component({
  selector: 'app-lostdetails',
  templateUrl: './lostdetails.component.html',
  styleUrls: ['./lostdetails.component.css']
})
export class LostdetailsComponent implements OnInit {
  public detailId;
  lostList: any = [];
  public errorMessage='';
  constructor(private route: ActivatedRoute, private lostService: LostService, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.detailId = id;
    this.showLostDetails(this.detailId);
  }

  showLostDetails(id) {
    this.lostService.getLostRecordById(id)
                    .subscribe(data=>this.lostList=data,
                      error=>this.errorMessage=error);
  }
}
