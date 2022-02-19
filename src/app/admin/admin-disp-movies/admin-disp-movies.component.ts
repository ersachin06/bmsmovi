import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../services/admin-service.service';
import {Movie} from '../modal/Movie';
import { MatTableDataSource } from '@angular/material/table';


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

  displayedColumns: string[] = [ 'movieId','title','language','releaseYear','rating','slot912'];
  //dataSource= new MatTableDataSource(ELEMENT_DATA);
  dataSource:Movie[];

  arrMovies:Movie[]=[];
  
  constructor(private adminService:AdminServiceService) { }

  ngOnInit(): void {
   
    this.adminService.getAllMovies().subscribe(res=>{
      console.log("1");
      console.log(res);
      console.log("2");
      let movieArr:Movie[]=res as Movie[];
      console.log(movieArr[0].actors[0].actorId);
      console.log(movieArr[0].actors[0].firstName);
      console.log(movieArr[1]);
      this.arrMovies=movieArr;
      this.dataSource=movieArr;
    })


  }

}
