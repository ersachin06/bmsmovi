import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  loginForm: FormGroup;
  // recoverform = false;

  // showRecoverForm() {
  // 	this.loginform = !this.loginform;
  // 	this.recoverform = !this.recoverform;
  // }

  constructor(
    private fb: FormBuilder,
    private router : Router) {

  }

  ngOnInit() {
    this.loginForm = this.fb.group({      
      username : new FormControl('', Validators.minLength(5)),
      password: new FormControl('')
    })
  }

  public login() : void {
    console.log(this.loginForm.value);
    //this.authService.attemptAuth(this.loginForm.value);
    let unm=this.loginForm.value['username'];
    let pwd=this.loginForm.value['password'];
    if(unm==="a" && pwd==="a")
    {
      alert("valid user "+ unm+" "+ pwd);
      this.router.navigate  (['admin/admin-home']);
    //  this.router.navigate  (['admin-home']);
      //this.router.navigateByUrl('/admin/admin-home');
      //this.router.navigate(['About']); 
    }
    else{
      alert("invalid user "+ unm+" "+ pwd);
    }
  }

}
