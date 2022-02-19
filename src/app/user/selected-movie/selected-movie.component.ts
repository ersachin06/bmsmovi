import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';
import { MovieListDTO, Category } from '../modals/moviesListDTO';
import { Util } from '../util';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-selected-movie',
  templateUrl: './selected-movie.component.html',
  styleUrls: ['./selected-movie.component.css'],
  providers:[DatePipe]
})
export class SelectedMovieComponent implements OnInit {

  stDate:Date;
  eDate:Date;
  movieListDto :MovieListDTO;
  movieId:number;
  categories:Category[];
  isSlot912:boolean=false;
  isSlot1215:boolean=false;
  isSlot1518:boolean=false;
  isSlot1821:boolean=false;

  constructor(public datepipe: DatePipe,private activatedRoute:ActivatedRoute,private router:Router,private usrService:UserServiceService)
  {
    this.movieId=this.activatedRoute.snapshot.params['mid'];
    this.funGetMovieById(this.movieId);
    console.log("cer called selected movie ");
  }
  funGetMovieById(movieId:number)
  {
    this.usrService.getMovieById(movieId).subscribe(
      res=>{
        //let list: number[] = [1, 2, 3];

        this.movieListDto=res as MovieListDTO;
        //console.log(res.toString());
        console.log(this.movieListDto.movieId+" "+this.movieListDto.title);
         let obj=new Util();
         this.categories=this.movieListDto.categories;
          obj.functionDispMovie_MovieListDto(this.movieListDto);
          if(this.movieListDto.slot912)
          {
            this.isSlot912=true;
          }
          else
          {
            this.isSlot912=false;
          }
          //a>b?a:c;
          this.isSlot1215=this.movieListDto.slot1215?true:false;
          this.isSlot1518=this.movieListDto.slot1518?true:false;
          this.isSlot1821=this.movieListDto.slot1821?true:false;
          this.startDate=this.movieListDto.startDate;///2020-12-06T15:52:31
          this.endDate=this.movieListDto.endDate;
          //import { DatePipe } from '@angular/common'
// ...
// constructor(public datepipe: DatePipe){}
// ...
           //this.stDate =this.datepipe.transform(this.startDate, 'y-MM-dd');
         //  this.eDate =this.datepipe.transform(this.endDate, 'y-MM-dd');
          // let eDate =this.datepipe.transform(this.endDate, 'EEEE MMM dd y h:mm:ss');
           console.log("latest start date : ");
          // console.log(stDate+" GMT+0530 (India Standard Time");//Sunday Dec 06 2020 3 52 31
//console.log(stDate);
//console.log(eDate);//Sunday Dec 06 2020 3 52 31
          // stDate=stDate+" GMT+0530 (India Standard Time)";
          // eDate=eDate+" GMT+0530 (India Standard Time)";
          // console.log("1");
          // console.log(stDate);
           console.log("2");
          //this.startDate=new Date("2017-10-01");//Sun Oct 01 2017 05:30:00 GMT+0530 (India Standard Time)
         //EEEE, MMMM d, y, h:mm:ss a zzzz
          //this.endDate=new Date("2021-12-23");
          console.log("start date : cer -- ");


        //console.log(this.startDate);
        //console.log(this.endDate);

   //this. dateArr = this.getDateArray(this.startDate,this.endDate);
  //this. dateArr = this.getDateArray(stDate,eDate);
   console.log("date array starts ");
   this.dateArr.forEach((dt:Date)=>{
     console.log(dt);
   })
   console.log("date array ends ");
          console.log("slot912: "+this.isSlot912+" slot1215: "+this.isSlot1215+" slot1518: "+this.isSlot1518+" slot1821: "+this.isSlot1821);
      }
    )
  }

  /*
  console.log(new Date().toString())
console.log(new Date().toISOString())

// To create it from string
let dateStr = "Fri Apr 20 2020 00:00:00 GMT+0530 (India Standard Time)"
console.log(new Date(dateStr).toISOString())//2021-06-23T07:24:05.434Z
  */
  dateArr:any[];
  ngOnInit(): void {
    console.log("init called ngoninit selectmovie");

  }
  startDate : Date;//= new Date("2017-10-01"); //YYYY-MM-DD
   endDate :Date;//= new Date("2017-10-07"); //YYYY-MM-DD

  getDateArray(start, end) {
      var arr = new Array();
      var dt = new Date(start);
      while (dt <= end) {
          arr.push(new Date(dt));
          dt.setDate(dt.getDate() + 1);
      }
      return arr;
  }




  funBookNow()
  {
    this.router.navigate(["/seats-selection"]);
  }
}
