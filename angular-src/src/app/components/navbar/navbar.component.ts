import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private flashmsg: FlashMessagesService,
              private authservice: AuthService,private router:Router) { }

  ngOnInit() {
  }
        onlogout(){
          this.authservice.logout();
          this.flashmsg.show("You Are Log Out",{cssClass:'alert-success',timeout:3000});
          this.router.navigate(['login']);
          return false;
        }
}
