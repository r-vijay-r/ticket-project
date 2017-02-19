import { Component, OnInit } from '@angular/core';
import { AuthResolveService } from '../auth-resolve.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	theater;
  constructor(public auth:AuthResolveService) {
  	this.theater=auth.allTheaters();
  }

  ngOnInit() {

  }

}
