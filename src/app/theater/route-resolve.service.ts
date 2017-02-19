import { Injectable } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Injectable()
export class RouteResolveService {

  constructor(private router:Router,private r:ActivatedRoute) { }
  goTo(path){
  	this.router.navigate(path,{relativeTo:this.r});
  }
}
