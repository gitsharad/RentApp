import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
fname : String;
lname : String;
username : String;
email : String;
password : String;

  constructor(private validateservice: ValidateService,private flashmsg: FlashMessagesService,
              private authservice: AuthService,private router:Router) { }
  onregistersubmit(){
    
    const user={
      fname:this.fname,
      lname:this.lname,
      username:this.username,
      email:this.email,
      password:this.password
      }
         if(!this.validateservice.ValidateRegister(user)){
           console.log('please filled all fields...',user);
           this.flashmsg.show("please fill all fields...",{cssClass:"alert-danger",timeout:3000});
           return false;
         }else
         {
           this.authservice.registerUser(user).subscribe(data=>{ 
           if(data.success){
             this.flashmsg.show("you are now registered!",{cssClass:"alert-success",timeout:3000});
            // console.log("user in subscribe",user);
             this.router.navigate(['/login']);
           }else{
             this.flashmsg.show("something went wrong!",{cssClass:"alert-danger",timeout:3000});
             this.router.navigate(['/register']);
           }
         });
        }

  }
  ngOnInit() {
  }

}
