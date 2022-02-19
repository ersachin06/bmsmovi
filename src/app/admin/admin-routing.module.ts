import { AdminErrorComponent } from './admin-error/admin-error.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ViewBookedTicketsComponent } from './view-booked-tickets/view-booked-tickets.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminAddMovieComponent } from './admin-add-movie/admin-add-movie.component';
import { AdminDispMoviesComponent } from './admin-disp-movies/admin-disp-movies.component';


const routes: Routes = [
  { path: '', component:AdminLoginComponent },
  {path:'admin-login',component:AdminLoginComponent},
    {path:'admin-home',component:AdminHomeComponent, children:[
    {path:'view-booked-tickets',component:ViewBookedTicketsComponent},
    {path:'view-users',component:ViewUsersComponent},
    {path:'add-movie',component:AdminAddMovieComponent},
    {path:'show-movie',component:AdminDispMoviesComponent},
    
  ]},
  {path:'**',component:AdminErrorComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }