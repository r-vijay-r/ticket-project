import { Component, OnInit } from '@angular/core';
import { AuthResolveService } from '../auth-resolve.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 constructor(private authenticate:AuthResolveService) { 
  }
  ngOnInit() {
  }
  submit(){
  }

}
