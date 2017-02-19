import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-halls',
  templateUrl: './add-halls.component.html',
  styleUrls: ['./add-halls.component.css']
})
export class AddHallsComponent implements OnInit {

	@Output() data = new EventEmitter<any>();
	form:FormGroup;
	constructor(public fb:FormBuilder) {
		this.setForm();
	}
	ngOnInit() {
	}
	setForm(){
		this.form=this.fb.group({
		  name:['',Validators.required],
		  totalSeats:['',Validators.required],
		  type:['',Validators.required],
		});
	}
	submit(){
		this.data.emit(this.form.value);
		this.setForm();
	}
}
