import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheaterRoutingModule } from './theater-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterFormComponent } from './login/register-form/register-form.component';
import { ProfileComponent } from './profile/profile.component';
import { AddHallsComponent } from './profile/add-halls/add-halls.component';
import { DisplayHallsComponent } from './profile/display-halls/display-halls.component';
import { AddFilmsComponent } from './profile/add-films/add-films.component';
import { DisplayFilmsComponent } from './profile/display-films/display-films.component';
import { TicketsComponent } from './profile/display-films/tickets/tickets.component';
import { TheaterComponent } from './theater.component';
import 'hammerjs';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { AuthResolveService } from './auth-resolve.service';
import { DataResolveService } from './data-resolve.service';
import { RouteResolveService } from './route-resolve.service';
import { HallInfoComponent } from './profile/display-films/hall-info/hall-info.component';
import { AddTimeComponent } from './profile/display-films/add-time/add-time.component';
import { ShowTimeComponent } from './profile/display-films/show-time/show-time.component';
import { AddTicketsComponent } from './profile/display-films/add-tickets/add-tickets.component';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TheaterRoutingModule,
    MaterialModule
  ],
  declarations: [
  	LoginComponent, 
  	RegisterFormComponent, 
  	ProfileComponent, 
  	AddHallsComponent, 
    TheaterComponent,
  	DisplayHallsComponent, 
  	AddFilmsComponent, 
  	DisplayFilmsComponent, 
  	TicketsComponent, HallInfoComponent, AddTimeComponent, ShowTimeComponent, AddTicketsComponent
  ],
  providers:[AuthResolveService,DataResolveService,RouteResolveService]
})
export class TheaterModule { }
