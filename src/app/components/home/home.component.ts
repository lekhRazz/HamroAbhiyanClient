import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/materialize/js/materialize.min.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
options={fullWidth: true, indicators: true};
  constructor() { 
  
  }

  ngOnInit() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, this.options);
   

  }

}
