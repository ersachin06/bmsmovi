import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  frmGrp:FormGroup;
  constructor(private fb:FormBuilder,private userservice:UserServiceService) { }
  // reviewId,customerId,reviewDesc,star
  // ,
  // movieId,dateOfReview
  ngOnInit(): void {
    this.frmGrp=this.fb.group(
      {
        "reviewId":this.fb.control(''),
        "customerId":this.fb.control(''),
        "reviewDesc":this.fb.control(''),
        "star":this.fb.control(''),
        "movieId":this.fb.control(''),
        "dateOfReview":this.fb.control('')
      }
    )
    console.log(this.frmGrp);
  }

  frmSub()
  {
    this.userservice.funUser();
    console.log(this.frmGrp.value);
    console.log("star: " +this.frmGrp.controls['star'].value);
  }
}
