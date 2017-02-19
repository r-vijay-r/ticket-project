import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheaterRoutingModule } from './theater-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterFormComponent } from './login/register-form/register-form.component';
import { ProfileComponent } from './profile/profile.component';
import { AddHallsComponent } from './profile/add-halls/add-halls.component';
import { DisplayHallsComponent } from './profile/display-halls/display-halls.component';
import { AddFilmsComponent } from './profile/display-halls/add-films/add-films.component';
import { DisplayFilmsComponent } from './profile/display-films/display-films.component';
import { TicketsComponent } from './profile/display-films/tickets/tickets.component';
import { TheaterComponent } from './theater.component';
import 'hammerjs';
import { MaterialModule } from '@angular/material';
import { AuthResolveService } from './auth-resolve.service';
import { DataResolveService } from './data-resolve.service';
import { RouteResolveService } from './route-resolve.service';
@NgModule({
  imports: [
    CommonModule,
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
  	TicketsComponent
  ],
  providers:[AuthResolveService,DataResolveService,RouteResolveService]
})
export class TheaterModule { }
