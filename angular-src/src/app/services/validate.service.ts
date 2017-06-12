import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  ValidateRegister(user){
         
    if(user.fname==undefined || user.username==undefined || user.password==undefined || user.lname==undefined || user.email==undefined)
    {
      return false;
    }
    else {
      return true;
    }

  }
  

}
