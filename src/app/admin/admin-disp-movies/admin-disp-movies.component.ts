import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../services/admin-service.service';
import {Movie} from '../modal/Movie';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { getMovieLoaded, getMovieLoading, getMovies, getMovieState, RootReducerState } from '../reducers';
import { MovieListRequestAction, MovieListSuccessAction } from '../actions/movie-action';
import { combineLatest } from 'rxjs';



// const ELEMENT_DATA: Movie[]=[{
//   "movieId": 4,
//   "title": "indian",
//   "description": "desc",
 
//   "language": {
//     "language_id": 1,
//     "name": "Punjabi",
 
//   },
//   "rating": 5,
 
 
 
 
//   "slot912": "slot912",
//   "slot1215": null,
//   "slot1518": null,
//   "slot1821": null,
//   "goldPrice": 500,
//   "silverPrice": 250,
//   "categories": [
//     {
//       "categoryId": 1,
//       "name": "Thirller",
 
//     },
//     {
//       "categoryId": 4,
//       "name": "Adventure",
 
//     },
//     {
//       "categoryId": 5,
//       "name": "Adventure",
 
//     }
//   ],
//   "actors": [
//     {
//       "actorId": 6,
//       "firstName": "vijay",
 
//       "lastName": "kumar"
//     },
//     {
//       "actorId": 2,
//       "firstName": "salman",
 
//       "lastName": "kumar"
//     },
//     {
//       "actorId": 3,
//       "firstName": "ajay",
 
//       "lastName": "kumar"
//     }
//   ],
//   "originalLanguage": true
// },
// {
//   "movieId": 5,
//   "title": "indian",
//   "description": "desc",
 
//   "language": {
//     "language_id": 1,
//     "name": "Punjabi",
 
//   },
//   "rating": 5,
 
 
 
 
//   "slot912": "slot912",
//   "slot1215": null,
//   "slot1518": null,
//   "slot1821": null,
//   "goldPrice": 500,
//   "silverPrice": 250,
//   "categories": [
//     {
//       "categoryId": 1,
//       "name": "Thirller",
 
//     },
//     {
//       "categoryId": 4,
//       "name": "Adventure",
 
//     },
//     {
//       "categoryId": 5,
//       "name": "Adventure",
 
//     }
//   ],
//   "actors": [
//     {
//       "actorId": 6,
//       "firstName": "vijay",
 
//       "lastName": "kumar"
//     },
//     {
//       "actorId": 2,
//       "firstName": "salman",
 
//       "lastName": "kumar"
//     },
//     {
//       "actorId": 3,
//       "firstName": "ajay",
 
//       "lastName": "kumar"
//     }
//   ],
//   "originalLanguage": true
// }
// ]

@Component({
  selector: 'app-admin-disp-movies',
  templateUrl: './admin-disp-movies.component.html',
  styleUrls: ['./admin-disp-movies.component.css']
})
export class AdminDispMoviesComponent implements OnInit {
//<th>Movie Id</th>
// <th>Title</th>
// <th>releaseYear</th>
// <th>language</th>
// <th>startDate</th>
// <th>endDate</th>
// <th>slot912</th>
// <th>slot1215</th>
// <th>slot1518</th>
// <th>slot1821</th>
// <th>goldPrice</th>
// <th>silverPrice</th>
// <th>originalLanguage</th>

  displayedColumns: string[] = [ 'movieId','title','description','rating','startDate','endDate','language','releaseYear','rating','slot912','slot1215','slot1518','slot1821','goldPrice','silverPrice'];
  //dataSource= new MatTableDataSource(ELEMENT_DATA);
  dataSource:Movie[];

  arrMovies:Movie[]=[];
  
  constructor(private adminService:AdminServiceService,private store:Store<RootReducerState>) { }

  ngOnInit(): void {
   const loading$=this.store.select(getMovieLoading);
    const loaded$=this.store.select(getMovieLoaded);
    const getMoviesData=this.store.select(getMovies);
    console.log("init fired ");
     combineLatest([loading$,loaded$]).subscribe((res)=>{
       console.log("2");
  //     
        if(!res[0] && !res[1])
        {
          this.store.dispatch(new MovieListRequestAction())
          this.adminService.getAllMovies().subscribe(dt=>{
            console.log("88");
            console.log(dt);
            console.log("89");
            let movieArr:Movie[]=dt as Movie[];
            console.log(movieArr[0].actors[0].actorId);
            console.log(movieArr[0].actors[0].firstName);
            console.log(movieArr[1]);
            this.arrMovies=movieArr;
            this.dataSource=movieArr;
            this.store.dispatch(new MovieListSuccessAction({data:movieArr}));
          })
       
         }
  //       console.log("2");
    })
  //  // this.store.select(getMovies).subscribe
  //   // this.store.select(getMovies).subscribe(data=>{
  //   //   this.dataSource=data;
  //   //   this.arrMovies=data
  //   // })
     getMoviesData.subscribe((dt1)=>{
       this.arrMovies=dt1;
       this.dataSource=dt1;
     })

  }

}
