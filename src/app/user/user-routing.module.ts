import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookMovieComponent } from './book-movie/book-movie.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { ViewCartComponent } from './view-cart/view-cart.component';


const routes: Routes = [
  { path: '', component: UserHomeComponent,children:[
    {path:'user-home',component:UserHomeComponent},
    {path:'view-ticket',component:ViewTicketComponent},
    {path:'view-cart',component:ViewCartComponent},
    {path:'book-movie',component:BookMovieComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }