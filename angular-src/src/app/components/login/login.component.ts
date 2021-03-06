import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {MatInputModule} from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:String;
password:String;
  constructor(private flashmsg: FlashMessagesService,
              private authservice: AuthService,private router:Router) { }

  ngOnInit() {
  }
  onloginsubmit(){
   const user={
     username:this.username,
     password:this.password
   }
   this.authservice.authenticateUser(user).subscribe(data =>{
    if(data.success){
      this.authservice.storeUserData(data.token,user);
      this.flashmsg.show(data.msg ,{cssClass:'alert-success',
                                    timeout:5000});
      this.router.navigate(['dashboard']);  
    }else{
      this.flashmsg.show(data.msg ,{cssClass:'alert-danger',
                                    timeout:5000});
      this.router.navigate(['login']);
    }
    // console.log("this is demo",data);
   });
  }

}
