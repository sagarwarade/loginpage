import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';
import { ForgotPINComponent } from './forgot-pin/forgot-pin.component';
import { ContentManagementComponent } from './content-management/content-management.component';
import { BrowserNotSupportedComponent } from './browser-not-supported/browser-not-supported.component';


const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'home' , component : HomeComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'register' , component : RegisterComponent},
  {path : 'user' , component : UserComponent},
  {path : 'forgotPIN' , component : ForgotPINComponent},
  {path : 'contentManage' , component : ContentManagementComponent},
  {path : 'browserNotSupported' , component : BrowserNotSupportedComponent},
  
  {path : '**' , component : PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
