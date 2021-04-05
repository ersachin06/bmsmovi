import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../services/admin-service.service';
//import { UserServiceService } from '../../user/service/user-service.service';

@Component({
  selector: 'app-admin-add-movie',
  templateUrl: './admin-add-movie.component.html',
  styleUrls: ['./admin-add-movie.component.css']
})
export class AdminAddMovieComponent implements OnInit {

  // constructor(private adminService:AdminServiceService,private userSrvice:UserServiceService ) { } 
  constructor(private adminService:AdminServiceService) { } 

  ngOnInit(): void {
  }

  addMovie()
  {
    // this.userSrvice.funUser();
      alert("fun caleld - addMovie()");
    let data:any={
      "movieId": 15,
      "title": "andaz apna apna",
      "description": "desc",
      "releaseYear": "2020-12-06T10:22:31.166+00:00",
      "language": {
          "language_id": 1,
          "name": "English",
          "last_update": "2020-12-03T14:34:06"
      },
      "rating": 5,
      "lastUpdate": "2020-12-06T15:52:31.1712764",
      "startDate": "2020-12-06T15:52:31.1712764",
      "endDate": "2020-12-06T15:52:31.1712764",
      "lastUpdateTemp": "2020-12-06T10:22:31.166+00:00",
      "slot912": "slot912",
      "slot1215": null,
      "slot1518": null,
      "slot1821": null,
      "goldPrice": 500,
      "silverPrice": 250,
      "categories": [
          {
              "categoryId": 1,
              "name": "kids",
              "lastUpdate": "2020-12-04T12:56:39"
          },
          {
              "categoryId": 4,
              "name": "Action",
              "lastUpdate": "2020-12-04T12:57:54"
          },
          {
              "categoryId": 5,
              "name": "Thirller",
              "lastUpdate": "2020-12-04T12:58:05"
          }
      ],
      "actors": [
          {
              "actorId": 6,
              "firstName": "mohan",
              "lastUpdate": "2020-12-03T21:41:42",
              "lastName": "kumar"
          },
          {
              "actorId": 2,
              "firstName": "sohan",
              "lastUpdate": "2020-12-03T21:40:09",
              "lastName": "kumar"
          },
          {
              "actorId": 3,
              "firstName": "mohan",
              "lastUpdate": "2020-12-03T21:41:37",
              "lastName": "kumar"
          }
      ],
      "originalLanguage": true
  };

    // this.adminService.addMovie(data).subscribe(
    //     res=>{
    //             if(!res){
    //               alert("this.toaster.error(res.error);");
    //               return;
    //             }
                
    //             alert("this.toaster.success('You have registered successfully. Plaese login to continue.')");
                
    //             console.log(res);
    //           }
    // )


    // this.authService.register(this.registerForm.value).subscribe(res=>{
    //     if(!res.success){
    //       this.toaster.error(res.error);
    //       return;
    //     }
    //     this.registerForm.reset();
    //     this.toaster.success('You have registered successfully. Plaese login to continue.');
    //     this.router.navigate(['login']);
    //     console.log(res);
    //   })
  }
}
