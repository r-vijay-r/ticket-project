import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
	@Input('userdata') set setUser(userdata){
		this.userdata=userdata;
  	this.form=this.fb.group({
  		name:[this.userdata.name,Validators.required],
  		email:[this.userdata.email,Validators.required],
  		mobile:[this.userdata.mobile,Validators.required]
  	});
  }
  userdata;
  @Output() data = new EventEmitter<any>();
  form:FormGroup;
  constructor(public fb:FormBuilder) {
    this.form=fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      mobile:['',Validators.required],
    });
  }
  ngOnInit() {
  }
  submit(){
  	this.data.emit(this.form.value)
  }

}
