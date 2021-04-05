import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';
import { MovieListDTO, Category } from '../modals/moviesListDTO';
import { Util } from '../util';

@Component({
  selector: 'app-selected-movie',
  templateUrl: './selected-movie.component.html',
  styleUrls: ['./selected-movie.component.css']
})
export class SelectedMovieComponent implements OnInit {

  movieListDto :MovieListDTO;
  movieId:number;
  categories:Category[];
  isSlot912:boolean=false;
  isSlot1215:boolean=false;
  isSlot1518:boolean=false;
  isSlot1821:boolean=false;
  
  constructor(private activatedRoute:ActivatedRoute,private router:Router,private usrService:UserServiceService) 
  {
    this.movieId=this.activatedRoute.snapshot.params['mid'];
    this.funGetMovieById(this.movieId);
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
          console.log("slot912: "+this.isSlot912+" slot1215: "+this.isSlot1215+" slot1518: "+this.isSlot1518+" slot1821: "+this.isSlot1821);
      }
    )
  }

  ngOnInit(): void {
  }
  funBookNow()
  {
    //this.router.navigate(["/seats-selection"]);
  }
}
