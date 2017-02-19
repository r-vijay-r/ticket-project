import { Component, OnInit } from '@angular/core';
import { AuthResolveService } from './auth-resolve.service';
@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html'
})
export class TheaterComponent implements OnInit {
  loggedin;
  constructor(private auths:AuthResolveService) { 
  	//this.router.navigate(['login'],{relativeTo:this.r});
      this.auths.checkAuthenticated.subscribe(data=>{
        this.loggedin=data;
      });
  }

  ngOnInit() {
  }
  login(){
    this.auths.login();
  }

  logout(){
    this.auths.logout();
  }

  submit(){
  	
  }

}
