import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { DataResolveService } from './data-resolve.service';
import { Subject } from 'rxjs';
import { RouteResolveService } from './route-resolve.service';
@Injectable()
export class AuthResolveService {
	user;
	auth = new Subject<boolean>();
  constructor(public af : AngularFire,public navigate:RouteResolveService,public data:DataResolveService) {
  	this.af.auth.subscribe(user=>{
  		if(user!=undefined) {
  			this.user=user;
        this.auth.next(true);
        this.data.setUserData(user);
        //console.log(this.auth);
      }else{
        this.auth.next(false);
        //console.log(this.auth);
        this.navigate.goTo(['theater']);
      }
    })
  }
  login(){
    this.af.auth.login();
  }
  logout(){
    this.af.auth.logout();
  }
  get checkAuthenticated(){
  	return this.auth.asObservable();
  }
  allTheaters(){
    return this.data.databaseObject("theaterInfo/"+this.data.userDetails().uid);
  }
  allHalls(){
      return this.data.databaseList("hallsInfo/"+this.data.userDetails().uid,{orderByChild:"name"});
  }
  getHall(hallKey){
      return this.data.databaseObject("hallsInfo/"+this.data.userDetails().uid+"/"+hallKey);
  }
  allFilms(){
  	return this.data.databaseList("filmsInfo/"+this.data.userDetails().uid,{orderByChild:"name"});
  }
  allTimes(filmKey){
  	return this.data.databaseList("timeInfo/"+this.data.userDetails().uid,{orderByChild:"filmKey",equalTo:filmKey});
  }
  allTickets(timeKey){
  	return this.data.databaseObject("ticketsInfo/"+this.data.userDetails().uid+"/"+timeKey);
  }
  get userdetails(){
    return this.data.userDetails();
  }
}
