import { Component, OnInit, Input } from '@angular/core';
import { AuthResolveService } from '../../../auth-resolve.service';
@Component({
  selector: 'app-show-time',
  templateUrl: './show-time.component.html',
  styleUrls: ['./show-time.component.css']
})
export class ShowTimeComponent implements OnInit {
  @Input('filmKey') set getFilmKey(filmKey){
  	this.timeList=this.auth.allTimes(filmKey);
  }
  timeList;
  constructor(private auth:AuthResolveService) { }

  ngOnInit() {
  }

}
