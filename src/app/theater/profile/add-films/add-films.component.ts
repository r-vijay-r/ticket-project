import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthResolveService } from '../../auth-resolve.service';
@Component({
  selector: 'app-add-films',
  templateUrl: './add-films.component.html',
  styleUrls: ['./add-films.component.css']
})
export class AddFilmsComponent implements OnInit {
	@Output() data = new EventEmitter<any>();
	form:FormGroup;
	halls;
	constructor(public fb:FormBuilder,public auth:AuthResolveService) {
		this.setForm();
		this.halls=this.auth.allHalls();
	}
	ngOnInit() {
	}
	setForm(){
		this.form=this.fb.group({
		  name:['',Validators.required],
		  hall:['',Validators.required],
		  startingTime:['',Validators.required],
		  endingTime:['',Validators.required],
		  ticketFare:['',Validators.required]
		});
	}
	submit(){
		this.data.emit(this.form.value);
		this.setForm();
	}

}
