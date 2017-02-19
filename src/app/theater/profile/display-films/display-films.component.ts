import { Component, OnInit } from '@angular/core';
import { AuthResolveService } from'../../auth-resolve.service';

@Component({
  selector: 'app-display-films',
  templateUrl: './display-films.component.html',
  styleUrls: ['./display-films.component.css']
})
export class DisplayFilmsComponent implements OnInit {

	films;
	constructor(private authUser:AuthResolveService) {
		this.films=this.authUser.allFilms();
	}

	ngOnInit() {
	}

}
