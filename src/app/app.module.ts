import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationComponent } from './home-page/components/navigation/navigation.component';
import { MovieslistComponent } from './home-page/components/movieslist/movieslist.component';
import { SingleMovieViewComponent } from './home-page/components/single-movie-view/single-movie-view.component';
import { FooterComponent } from './home-page/components/footer/footer.component';
import { SeatsSelectionComponent } from './home-page/components/seats-selection/seats-selection.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavigationComponent,
    MovieslistComponent,
    SingleMovieViewComponent,
    FooterComponent,
    SeatsSelectionComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
