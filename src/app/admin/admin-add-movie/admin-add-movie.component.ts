import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminServiceService } from '../services/admin-service.service';
//import { UserServiceService } from '../../user/service/user-service.service';

@Component({
  selector: 'app-admin-add-movie',
  templateUrl: './admin-add-movie.component.html',
  styleUrls: ['./admin-add-movie.component.css']
})
export class AdminAddMovieComponent implements OnInit {

  frmGrp:FormGroup;
  // constructor(private adminService:AdminServiceService,private userSrvice:UserServiceService ) { } 
  constructor(private adminService:AdminServiceService,private fb:FormBuilder) { } 

  ngOnInit(): void {
    this.frmGrp=this.fb.group
    (
{
//    this.frmGrp = this.fb.group({
//      'fullname': ['', Validators.required],
//      'gender': [],
//      'address': this.fb.group({
//          'street': [''],
//          'houseNumber': [''],
//          'postalCode': ['']
//      })
//  });
  // https://stackoverflow.com/questions/44499425/how-to-use-formcontrolname-and-deal-with-nested-formgroup
    "movieId":this.fb .control(''),//
    "title":this.fb .control(''),//
    "description": this.fb .control(''),//
    "releaseYear": this.fb .control(''),//
    "language": this.fb.group({
      "language_id":this.fb.control('')
    }),
    "rating": this.fb.control(''),//
    "lastUpdate": this.fb.control(''),
    "startDate": this.fb.control(''),//
    "endDate": this.fb.control(''),//
    "lastUpdateTemp": this.fb.control(''),
    "slot912": this.fb.control(''),//
    "slot1215": this.fb.control(''),//
    "slot1518": this.fb.control(''),//
    "slot1821": this.fb.control(''),//
    "goldPrice": this.fb.control(''),//
    "silverPrice": this.fb.control(''),//
    "categories": this.fb.control('') ,
    "actors": this.fb.control(''),
    "originalLanguage":this.fb.control(''),
  

      }
    )
  }
  funFormatDate(ipDtFromCal:string):String
  {
    
    
    //this.frmGrp.controls.releaseYear.setValue("2022-02-15");
    //let ipDtFromCal:Date=this.frmGrp.controls.releaseYear.value;
    

   console.log(ipDtFromCal);
   let dt=new Date(ipDtFromCal);
   console.log(dt);  
   let resIsoString=dt.toISOString();
   console.log(resIsoString);//2022-02-15T00:00:00.000Z
 
    //let dt:string="2020-12-04T11:40:20.8319291";
    return resIsoString;//2022-02-15T00:00:00.000Z
  }
  funGetActors()
  {
    let actors=[ 
      {"actorId": 1,"firstName": "rohan", "lastName": "kumar"}, 
      {"actorId": 2,"firstName": "rohan", "lastName": "kumar"}
    ];

    return actors;
    
  }
  funGetCategories()
  {
    let  categories= [
      {"categoryId": 1,"name": "kids" },
      {"categoryId": 4,"name": "Action"},
      {"categoryId": 5,"name": "Thirller"}
    ]
    return categories;
  }

  frmSub()
  {
    console.log(this.frmGrp.value);
    let actors=this.funGetActors();
    let categories=this.funGetCategories();

     this.frmGrp.controls.actors.setValue(actors);
     this.frmGrp.controls.categories.setValue(categories);

     let releaseYear=this.frmGrp.controls.releaseYear.value;
     let formattedReleaseYear=this.funFormatDate(releaseYear);

     let startDate=this.frmGrp.controls.startDate.value;
     let formattedStartDate=this.funFormatDate(startDate);

     let endDate=this.frmGrp.controls.endDate.value;
     let formattedEndDate=this.funFormatDate(endDate);


     this.frmGrp.controls.releaseYear.setValue(formattedReleaseYear);
     this.frmGrp.controls.startDate.setValue(formattedStartDate);
     this.frmGrp.controls.endDate.setValue(formattedEndDate);



    this.adminService.addMovie(this.frmGrp.value).subscribe(res=>{
      console.log(res);
      console.log("add movie service called");
    })
    console.log("frm submit called");
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

  console.log("add movie called ");

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
