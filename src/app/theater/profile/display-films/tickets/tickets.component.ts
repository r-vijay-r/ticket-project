import { Component, OnInit, Input } from '@angular/core';
import { AuthResolveService } from '../../../auth-resolve.service';
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  @Input('timeKey') set getTimeKey(timeKey){
  	this.tickets=this.auth.allTickets(timeKey);
  };
  tickets;
  constructor(private auth:AuthResolveService) { }

  ngOnInit() {
  }

}
