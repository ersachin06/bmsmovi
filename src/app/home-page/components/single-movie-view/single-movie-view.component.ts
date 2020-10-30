import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-movie-view',
  templateUrl: './single-movie-view.component.html',
  styleUrls: ['./single-movie-view.component.css']
})
export class SingleMovieViewComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  funBookNow()
  {
    this.router.navigate(["/seats-selection"]);
  }
}
