import { Component, OnInit, Input } from '@angular/core';
import { AuthResolveService } from '../../../auth-resolve.service';
@Component({
  selector: 'app-hall-info',
  templateUrl: './hall-info.component.html',
  styleUrls: ['./hall-info.component.css']
})
export class HallInfoComponent implements OnInit {
  @Input('hallKey') set getHallKey(hallKey){
  	this.hallInfo=this.auth.getHall(hallKey);
  };
  hallInfo;
  constructor(public auth:AuthResolveService) { }

  ngOnInit() {
  }

}
