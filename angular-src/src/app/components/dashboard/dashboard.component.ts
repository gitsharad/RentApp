import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  rent_modules: any = [{
    "module_name":"Monthly Billing",
    "routerlink":"/monthlybilling", 
    "module_icon":"glyphicon glyphicon-duplicate"
  },
  {
    "module_name":"New Registration",
    "routerlink":"/newrentor",
    "module_icon":"glyphicon glyphicon-plus-sign"
  }];
  constructor(private authservice:AuthService) {  }
   
  ngOnInit() {
  }

}
