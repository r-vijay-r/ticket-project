import { Component, OnInit } from '@angular/core';
import { AuthResolveService } from'../../auth-resolve.service';
@Component({
  selector: 'app-add-halls',
  templateUrl: './add-halls.component.html',
  styleUrls: ['./add-halls.component.css']
})
export class AddHallsComponent implements OnInit {

  constructor(private authUser:AuthResolveService) { }

  ngOnInit() {
  }
  submit(){
  	
  }

}
