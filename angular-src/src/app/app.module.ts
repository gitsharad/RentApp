import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule , Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatInputModule } from '@angular/material';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './guard/auth.guard';
import { NewRentorComponent } from './components/dashboard/new-rentor/new-rentor.component';
import { MonthlyComponent } from './components/dashboard/monthly/monthly.component';


const appRoutes : Routes = [
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
  {path:'newrentor',component:NewRentorComponent,canActivate:[AuthGuard]},
  {path:'monthlybilling',component:MonthlyComponent,canActivate:[AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    HomeComponent,
    RegisterComponent,
    NewRentorComponent,
    MonthlyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MatInputModule,
    BrowserAnimationsModule,
    FlashMessagesModule
  ],
  providers: [
   ValidateService,
   AuthService,
   AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
