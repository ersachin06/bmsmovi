import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookMovieComponent } from './book-movie/book-movie.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserRoutingModule } from './user-routing.module';
import { ViewCartComponent } from './view-cart/view-cart.component';



@NgModule({
  declarations: [BookMovieComponent, ViewTicketComponent, UserHomeComponent, ViewCartComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
