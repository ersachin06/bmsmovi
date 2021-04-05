import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api-service.service';
import { map } from "rxjs/operators";

//import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(  private httpclient:HttpClient, private apiService: ApiService,//private toaster: ToastrService
    ) { }

    //http://localhost:8912/movie
  addMovie(credentials) { 
    console.log("data inside amdin service 22:");
    console.log(JSON.stringify(credentials));
    console.log("data inside amdin service end");
    alert("adminSerivce caleld addMovie service ");
 //   return this.httpclient.post("http://localhost:8912/movie",credentials);
    return this.apiService.post("movie", credentials).pipe(
      map((data) => {
       // this.toaster.show("added successfully","Movie Added")
       alert("movie added ");
          return data;
      },(error)=>{
        alert("eror"+ error);
        //this.toaster.error(error);
      })
    );
  }

}
