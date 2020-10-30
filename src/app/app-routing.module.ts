import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SingleMovieViewComponent } from './home-page/components/single-movie-view/single-movie-view.component';
import { SeatsSelectionComponent } from './home-page/components/seats-selection/seats-selection.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'singleMovieView', component: SingleMovieViewComponent},
  { path: 'seats-selection', component: SeatsSelectionComponent},  
  {
    path:'user',loadChildren:()=> import ('src/app/user/user.module').then(m=>m.UserModule)
  } ,
  {
    path:'admin',loadChildren:()=> import ('src/app/admin/admin.module').then(m=>m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
