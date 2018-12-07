import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared-service/User/user.service';
import { Router } from '@angular/router';
// import * as Chartist from 'chartist';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public userId;
  userList: any = [];
  errorMessage = '';
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.userService.getUserId();
    this.userId = id;
    if (this.userId===null) {
      this.router.navigate(['/']);
    } else {
      this.checkUser(this.userId);
    }

  }
  checkUser(id) {
    this.userService.getUserById(id)
      .subscribe(data => {
        this.userList = data;
        if (this.userList.isAdmin === false) {
          this.router.navigate(['/']);

        }
      },
        error => this.errorMessage = error);
  }

}
