import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',redirectTo:'theater' ,pathMatch:'full' }
  ,{ path: 'theater',loadChildren: 'app/theater/theater.module#TheaterModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
