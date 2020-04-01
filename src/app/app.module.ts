import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './shared/material.module'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { UserComponent } from './user/user.component';
import { ForgotPINComponent } from './forgot-pin/forgot-pin.component';
import { ContentManagementComponent } from './content-management/content-management.component';
import {CopyRestrictorDirective} from './shared/CopyRestrictor.directive';
import { BrowserNotSupportedComponent } from './browser-not-supported/browser-not-supported.component';


@NgModule({
  declarations: [
    CopyRestrictorDirective,
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    UserComponent,
    ForgotPINComponent,
    ContentManagementComponent,
    BrowserNotSupportedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
