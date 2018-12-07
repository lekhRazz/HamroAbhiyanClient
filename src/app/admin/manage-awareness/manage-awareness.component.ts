import { Component, OnInit } from '@angular/core';
import { AwarenessService } from 'src/app/shared-service/Awareness/awareness.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/shared-service/User/user.service';

@Component({
  selector: 'app-manage-awareness',
  templateUrl: './manage-awareness.component.html',
  styleUrls: ['./manage-awareness.component.css']
})
export class ManageAwarenessComponent implements OnInit {

  user: User = new User();
  errorMessage = '';
  awarenessList: any = [];

  constructor(
    private awrnService: AwarenessService,
    private formBuilder: FormBuilder,
    private router: Router,
  private userService:UserService,
  ) { }

  ngOnInit() {
    this.showAwareness();
    // console.log(this.userService.getter());
  }


  showAwareness() {
    this.awrnService.getAwarenesses()
      .subscribe(data => this.awarenessList = data,
        error => this.errorMessage = error);
  }


  deleteAwarenessData: any;
  deleteAwarenessRecord(nws) {
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
  viewDetail(nws) {
    this.router.navigate(['/admin/awareness/', nws._id]);
  }
}
