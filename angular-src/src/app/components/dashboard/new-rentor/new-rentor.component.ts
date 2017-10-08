import { Component, OnInit } from '@angular/core';
import { RentorInterface } from "../rentor.interface";
@Component({
  selector: 'app-new-rentor',
  templateUrl: './new-rentor.component.html',
  styleUrls: ['./new-rentor.component.css'] 
})
export class NewRentorComponent implements OnInit   {

  rinfo:RentorInterface;
  constructor() { 
       }
   ngOnInit() {
    // we will initialize our form here
    this.rinfo={fname:"",
               lname:"",
              address:{
                street:'',
                address1:'',
                address2:'',
                postcode:''
              },
              RoomType:"",
              Entry_Date:"",
              Leave_Date:"",
              doclist:""
              
            };
    
  }
  save(model:RentorInterface ,isValid:boolean){
      //console.log("frrr",model,"ggggg",isValid); 
      //console.log("rfinfo",this.rinfo); 
      console.log("modal",model); 
  }
   
 
}  

/* {fname:'sharad',
       lname:'pawar',
       address:{
         street:'Munjabawast Road No 13 ',
         address1:'sr no 27',
         address2:'dhanori pune 15',
         postcode:'411015'
       }
      }
      */