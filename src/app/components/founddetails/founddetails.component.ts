import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoundService } from 'src/app/shared-service/Found/found.service';

@Component({
  selector: 'app-founddetails',
  templateUrl: './founddetails.component.html',
  styleUrls: ['./founddetails.component.css']
})
export class FounddetailsComponent implements OnInit {

  public detailId;
  foundList: any = [];
  public errorMessage = '';
  constructor(private route: ActivatedRoute, private router: Router, private foundService: FoundService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.detailId = id;
    this.showLostDetails(this.detailId);
  }
  showLostDetails(id) {
    this.foundService.getFoundById(id)
      .subscribe(data => this.foundList = data,
        error => this.errorMessage = error);
  }
}
