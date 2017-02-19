import { Component, OnInit } from '@angular/core';
import { AuthResolveService } from'../../auth-resolve.service';

@Component({
  selector: 'app-display-halls',
  templateUrl: './display-halls.component.html',
  styleUrls: ['./display-halls.component.css']
})
export class DisplayHallsComponent implements OnInit {
	halls;
	constructor(private authUser:AuthResolveService) {
		this.halls=authUser.allHalls();
	}

	ngOnInit() {
	}
	submit(){
		
	}

}
