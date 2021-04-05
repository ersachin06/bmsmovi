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
    //@ViewChildren("img") hellos: QueryList<any>;
    //@ViewChildren('myitems') items: QueryList<ElementRef>;
    @ViewChildren('attendee') attendeeInputs: QueryList<ElementRef>;
   arrTtlGoldSeats:number[]= Array.from(Array(50).keys());
   arrTtlSilverSeats:number[]= Array.from(Array(25).keys());
    seatImgUrl:string='../../../../assets/img/bseat.png';
  total:number=1000;
  showSeatList:any[]=[
    // {seatNo:1,seatType:'Gold',price:1000},
    // {seatNo:2,seatType:'Silver',price:500},
    // {seatNo:3,seatType:'Gold',price:1000},
  ];
  maxSeats:number=5;//maxseats user can booked is 
  alert:number=1;
  constructor() { }
  isMaxSeatLevelAchieved():boolean
  {
    let res:boolean=false;
    if(this.showSeatList.length<=this.maxSeats-1 && this.showSeatList.length>=0)
    {
      
      res=false;
    }
    else{
      res=true;
    //    alert("sorry you can not add more than 5 seats");
    }
    return res;
  }
  addSeatInfoToTable(seatInfo)
  {
    if(this.isMaxSeatLevelAchieved()==false)
    {
      this.showSeatList.push(seatInfo)
    }
    else{
        alert("sorry you can not add more than 5 seats");
    }

    
  }
  removeSeatInfoToTable(seatInfo)
  {
    let index = this.showSeatList.findIndex(obj => obj.seatNo === seatInfo.seatNo);
    this.showSeatList.splice(index,1);//remove obj from array by index.
    alert("seat "+seatInfo.seatNo+" removed ");

  }
  ngOnInit(): void {
  }
  ngAfterViewInit() 
  {
    console.log("view init fired start");
    this.attendeeInputs.forEach(hello => console.log(hello));
    console.log("view init fired end");
  }
  Seat(x:number,evt:any)
  { 
    
    let ctrlArr=this.attendeeInputs.toArray();
    let selectedImgSeat=ctrlArr[x];//it return object of native element.
    //if selectedImgSeat is in showSeatList than only proceed - ow show seat already selected by user.
    
    let index = this.showSeatList.findIndex(obj => obj.seatNo === x);
    //alert("index is : "+index);
    //index==-1 means seat is not present in showSeatlist.
    if(index==-1)//means seat is not selected by user.
    {
      if(this.isMaxSeatLevelAchieved()==false  )
      { 
        selectedImgSeat.nativeElement.src = "../../../../assets/img/fseat.png";
        let seatInfo={seatNo:x,seatType:"Gold",price:1000};
        this.addSeatInfoToTable(seatInfo);
      }
      else 
      {
        alert("max seat level achieved - you can book max 5 seats");
      }
    }
    else{
      selectedImgSeat.nativeElement.src = "../../../../assets/img/bseat.png";
      let seatInfo={seatNo:x,seatType:"Gold",price:1000};
      //this.objectsArray.splice(objIndex, 1);
     
      this.removeSeatInfoToTable(seatInfo);
      //alert("Seat already selected , please choose another one.");
    }

 // console.log("evt is : ");
 // console.log(x);
  //console.log(selectedImgSeat);
    //console.log(evt);
    
    //  alert('clicked '+ x);
      //this.seatImgUrl="../../../../assets/img/fseat.png";
  }
  confirmJourney()
  {

  }
}
