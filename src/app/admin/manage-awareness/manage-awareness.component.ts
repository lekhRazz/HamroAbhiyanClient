import { Component, OnInit } from '@angular/core';
import { AwarenessService } from 'src/app/shared-service/Awareness/awareness.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-awareness',
  templateUrl: './manage-awareness.component.html',
  styleUrls: ['./manage-awareness.component.css']
})
export class ManageAwarenessComponent implements OnInit {

  errorMessage = '';
  awarenessList:any=[];

  constructor(private awrnService:AwarenessService,private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.showAwareness();

  }


  showAwareness(){
    this.awrnService.getAwarenesses()
                    .subscribe(data=>this.awarenessList=data,
                      error=>this.errorMessage=error);
  }


  deleteAwarenessData: any;
  deleteAwarenessRecord(nws){
    this.deleteAwarenessData = nws;
    $("#deleteModal").modal("show");
  }

  confirmDelete() {
    this.awrnService.deleteAwareness(this.deleteAwarenessData._id)
      .subscribe((data) => {
        this.awarenessList.splice(this.awarenessList.indexOf(this.deleteAwarenessData), 1);
      },
        (error) => {
          console.log(error);
        });
    $("#deleteModal").modal("hide");

  }
}
