import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { RouteResolveService } from './route-resolve.service';
@Injectable()
export class DataResolveService {
	user:{
		"name":string,
		"pic":string,
		"email":string,
		"uid":string,
		"newUser":boolean
	};
  constructor(private af:AngularFire,private navigate:RouteResolveService) { }
  setUserData(user){
    this.databaseObject("theater/"+user.auth.uid).first().subscribe(data=>{
      //console.log(data);
  		if(data.$exists()) {
  			this.user={
		  		"name":data.name,
		  		"pic":data.pic,
		  		"email":data.email,
		  		"uid":user.auth.uid,
  				"newUser":false
  			}
  			this.navigate.goTo(['theater','profile']);
  		}else{
  			this.user={
		  		"name":user.auth.displayName,
		  		"pic":user.auth.photoURL,
		  		"email":user.auth.email,
		  		"uid":user.auth.uid,
		  		"newUser":true
		  	};
  			this.navigate.goTo(['theater','register']);
  		}
  	});
  }
  userDetails(){
  	return this.user;
  }
  databaseObject(path){
  	return this.af.database.object(path);
  }
  databaseList(path,queryObject={}){
  	return this.af.database.list(path,{query:queryObject});
  }
}
