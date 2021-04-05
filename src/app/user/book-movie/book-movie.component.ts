import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { MovieListDTO } from '../modals/moviesListDTO';

@Component({
  selector: 'app-book-movie',
  templateUrl: './book-movie.component.html',
  styleUrls: ['./book-movie.component.css']
})
export class BookMovieComponent implements OnInit {

  arrMovieListDto:MovieListDTO;
  constructor(private usrService:UserServiceService) { }

  ngOnInit(): void {
  }
  getMovieList()
  {
    this.usrService.getMovies().subscribe(
      res=>{
        //let list: number[] = [1, 2, 3];
        
        this.arrMovieListDto=res as MovieListDTO;
        //console.log(res.toString());
        //console.log(arrMovieListDto[0].movieId+" "+arrMovieListDto[0].title);
      }
    )
  }
}
