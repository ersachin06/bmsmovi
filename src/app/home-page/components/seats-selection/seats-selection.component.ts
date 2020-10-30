import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seats-selection',
  templateUrl: './seats-selection.component.html',
  styleUrls: ['./seats-selection.component.css']
})
export class SeatsSelectionComponent implements OnInit {

//   @Component({
//     template: `<div *ngFor="let i of r">{{ i }}</div>`
// })

   arrTtlGoldSeats:number[]= Array.from(Array(50).keys());
   arrTtlSilverSeats:number[]= Array.from(Array(25).keys());

  total:number=1000;
  showSeatList:any[]=[
    {seatNo:1,seatClass:'ist',fare:1000},
    {seatNo:2,seatClass:'ist',fare:3000},
    {seatNo:3,seatClass:'ist',fare:2000},
  ];
  alert:number=1;
  constructor() { }

  ngOnInit(): void {
  }
  Seat(x:any)
  {

  }
  confirmJourney()
  {

  }
}
