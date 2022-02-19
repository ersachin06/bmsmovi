import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookMovieComponent } from './book-movie/book-movie.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { SelectedMovieComponent } from './selected-movie/selected-movie.component';
import { SeatsSelectionComponent } from './seats-selection/seats-selection.component';


const routes: Routes = [
  { path: '', component: UserHomeComponent,children:[
    {path:'user-home',component:UserHomeComponent},
    {path:'view-ticket',component:ViewTicketComponent},
    {path:'view-cart',component:ViewCartComponent},
    {path:'book-movie',component:BookMovieComponent},
    {path:'add-review',component:AddReviewComponent},
    {path:'selected-movie/:mid',component:SelectedMovieComponent},
    {path:'seats-selection',component:SeatsSelectionComponent}
    
  ]},  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }