import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookMovieComponent } from './book-movie/book-movie.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserRoutingModule } from './user-routing.module';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserServiceService } from './service/user-service.service';
import { HttpClientModule } from '@angular/common/http';
import { SelectedMovieComponent } from './selected-movie/selected-movie.component';
import { SeatsSelectionComponent } from './seats-selection/seats-selection.component';



@NgModule({
  declarations: [BookMovieComponent, ViewTicketComponent, UserHomeComponent, ViewCartComponent, AddReviewComponent, SelectedMovieComponent, SeatsSelectionComponent],
  imports: [
    CommonModule,
    UserRoutingModule,ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserServiceService]
})
export class UserModule { } 
