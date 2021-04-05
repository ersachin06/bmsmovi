import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModule } from '../user.module';

//  @Injectable({
//   providedIn: UserModule
//  })
@Injectable()
export class UserServiceService {

  BaseUrl:string="http://localhost:8912";
  constructor(private httpClient:HttpClient) { }
  addReview()
  {
return  null;
  }
  
  getMovies()
  {
    let url = this.BaseUrl+'/getAllMovies';
    return this.httpClient.get(url);
  }
  getMovieById(movieId:number)
  {
    //http://localhost:8912/getMovieById?movieId=3
    let url=this.BaseUrl+"/getMovieById?movieId="+movieId;
    return this.httpClient.get(url);
  }
  funUser()
  {
    console.log("funuser called");
    alert("funuser called ");
  }
}
