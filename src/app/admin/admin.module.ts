import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewBookedTicketsComponent } from './view-booked-tickets/view-booked-tickets.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [ViewBookedTicketsComponent, ViewUsersComponent, AdminHomeComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
