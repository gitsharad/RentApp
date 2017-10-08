import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user:object;
  constructor(private AuthService:AuthService,
              private router:Router) { }

  ngOnInit() {
    
    this.AuthService.getProfile().subscribe(profile =>{
      this.user=profile.user; 
    },  
   err =>{
      //console.log('profile observable error',err);
      return false;
    } 
    );
}


}
