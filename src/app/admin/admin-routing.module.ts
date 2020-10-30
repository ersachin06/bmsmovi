import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ViewBookedTicketsComponent } from './view-booked-tickets/view-booked-tickets.component';
import { ViewUsersComponent } from './view-users/view-users.component';


const routes: Routes = [
  { path: '', component:AdminHomeComponent ,children:[
    {path:'view-booked-tickets',component:ViewBookedTicketsComponent},
    {path:'view-users',component:ViewUsersComponent},
    
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }