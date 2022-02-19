import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewBookedTicketsComponent } from './view-booked-tickets/view-booked-tickets.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AdminErrorComponent } from './admin-error/admin-error.component';
import { AdminAddMovieComponent } from './admin-add-movie/admin-add-movie.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AdminDispMoviesComponent } from './admin-disp-movies/admin-disp-movies.component';
import {MatTableModule} from '@angular/material/table';
import {  StoreModule } from '@ngrx/store';
import {rootReducer} from '../admin/reducers';
// import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ViewBookedTicketsComponent, ViewUsersComponent, AdminHomeComponent, AdminLoginComponent, AdminErrorComponent, AdminAddMovieComponent, AdminHeaderComponent, AdminFooterComponent, AdminDispMoviesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
 //   SharedModule,
    AdminRoutingModule,
    ToastrModule,
    MatTableModule,
    
    //StoreModule.forFeature('admin',rootReducer)
    StoreModule.forFeature('admin',rootReducer)
    
    
    // BrowserAnimationsModule

  ]
})
export class AdminModule { }
