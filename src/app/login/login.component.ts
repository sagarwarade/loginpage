import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms'
import { Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted =false;
  constructor(private FB: FormBuilder ,private router: Router) { }


  ngOnInit(){
    this.loginForm = this.FB.group({
      MobileNumber:new FormControl ('', [Validators.required,Validators.minLength(10), Validators.maxLength(10)]),
      PIN:new FormControl ('', [Validators.required,Validators.minLength(6), Validators.maxLength(6),Validators.pattern("^[0-9]+$")]),
      
    })
  }
  
   

onFormSubmit(){
  this.submitted = true ;
    
    if (this.loginForm.invalid){
      return;

    }
   
    alert('success !!!')
   this.router.navigate(['/user'])
    
}
get f() { return this.loginForm.controls; }
}
