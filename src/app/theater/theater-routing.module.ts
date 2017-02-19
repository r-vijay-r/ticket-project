import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TheaterComponent } from './theater.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
	{path:'',component:TheaterComponent,children:[
		{path:'profile',component: ProfileComponent },
		{path:'register',component: LoginComponent }
	]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TheaterRoutingModule { }
