import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared-service/User/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public userId;
  public isLogdedIn:boolean;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    let id = this.userService.getUserId();
    this.userId = id;
    if (this.userId===null) {
      this.isLogdedIn=false;
    } else {
      this.isLogdedIn=true;
    }
  }
  signout() {
    console.log("signout clicked");
    localStorage.clear();
    this.isLogdedIn=false;
  }
}
