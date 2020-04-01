import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, RequiredValidator } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
registerForm: FormGroup;
  submitted =false;
  isDisabled: boolean = false;
  button: string= 'Verify';
  constructor(private FB: FormBuilder ,private router: Router) { }


  ngOnInit(){
    this.registerForm = this.FB.group({
      MobileNumber:new FormControl ('', [Validators.required,Validators.minLength(10), Validators.maxLength(10)]),
      Fname:new FormControl ('', [Validators.required,Validators.pattern('[a-zA-Z]*')]),
      Lname:new FormControl ('', [Validators.required,Validators.pattern('[a-zA-Z]*')]),
      OTP:new FormControl ('', Validators.required),
      PIN: new FormControl ('',[Validators.required,Validators.minLength(6), Validators.maxLength(6)]),
      ConfirmPIN: new FormControl ('',Validators.required),
      
      
    })
  }
  
   

onFormSubmit(){
  this.submitted = true ;
    
    if (this.registerForm.invalid){
      return;

    }
   
    alert('success !!!')
   this.router.navigate(['/user'])
    
}
onButtonClick(){
  document.getElementById('otptext').className="show";
  if(true)
    this.registerForm.controls['MobileNumber'].disable();
    if(this.button === 'Verify') { 
      this.button = 'Edit'
    } else {
      this.button = 'Verify'
      this.registerForm.controls['MobileNumber'].enable();
    }
}

get f() { return this.registerForm.controls; }
}


