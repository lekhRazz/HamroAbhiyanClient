import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AwarenessService } from 'src/app/shared-service/Awareness/awareness.service';

@Component({
  selector: 'app-manage-awareness-details',
  templateUrl: './manage-awareness-details.component.html',
  styleUrls: ['./manage-awareness-details.component.css']
})
export class ManageAwarenessDetailsComponent implements OnInit {

  public detailId;
  awarenessList: any = [];
  public errorMessage = '';
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private awrnsService:AwarenessService
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
}
