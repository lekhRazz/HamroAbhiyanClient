import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardheader',
  templateUrl: './dashboardheader.component.html',
  styleUrls: ['./dashboardheader.component.css']
})
export class DashboardheaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  signout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
