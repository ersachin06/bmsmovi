import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-seats-selection',
  templateUrl: './seats-selection.component.html',
  styleUrls: ['./seats-selection.component.css']
})
export class SeatsSelectionComponent implements OnInit {

//   @Component({
//     template: `<div *ngFor="let i of r">{{ i }}</div>`
// })
    @ViewChildren("img") hellos: QueryList<any>;
  // @ViewChild('myId') myId: ElementRef;
   arrTtlGoldSeats:number[]= Array.from(Array(50).keys());
   arrTtlSilverSeats:number[]= Array.from(Array(25).keys());
    seatImgUrl:string='../../../../assets/img/bseat.png';
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
  ngAfterViewInit() 
  {
    console.log("view init fired start");
    this.hellos.forEach(hello => console.log(hello));
    console.log("view init fired end");
  }
  Seat(x:any)
  {

      alert('clicked '+ x);
      this.seatImgUrl="../../../../assets/img/fseat.png";
  }
  confirmJourney()
  {

  }
}
