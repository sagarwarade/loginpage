import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LoginForm';
  constructor(private router: Router){
    this.browsercheck();
  }
  browsercheck(){
     
    if(/(chrome\/[0-9]{2})/i.test(navigator.userAgent)){
      this.router.navigate(['/home'])
      console.log("hello")
    }
    else{
      this.router.navigate(['/browserNotSupported'])
      console.log("unsupported Browser")
    } 
  } 
}
