import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AwarenessService } from 'src/app/shared-service/Awareness/awareness.service';

@Component({
  selector: 'app-awarenessdetails',
  templateUrl: './awarenessdetails.component.html',
  styleUrls: ['./awarenessdetails.component.css']
})
export class AwarenessdetailsComponent implements OnInit {
  public detailId;
  awarenessList: any = [];
  public errorMessage = '';
  constructor(private route:ActivatedRoute,private router:Router,private awrnsService:AwarenessService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.detailId = id;
    this.showLostDetails(this.detailId);
  }
  showLostDetails(id){
    this.awrnsService.getAwarenessById(id)
                      .subscribe(data=>this.awarenessList=data,
                        error=>this.errorMessage=error);
  }
}
