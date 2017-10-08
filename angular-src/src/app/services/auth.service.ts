import { Injectable } from '@angular/core';
import {Http , Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService { 
  authtoken:any;
  user:any;
  service_url: string = "";
  //service_url: string = "http://localhost:3000/";
  constructor(private http:Http) { }
  getProfile(){
   //console.log("i am get called");
  // debugger;
     this.loadToken();
     let headers=new Headers(); 
     headers.append('Authorization',this.authtoken); 
     headers.append('content-type','application/json');
     //headers.append('WWW-Authenticate',this.authtoken);
     return this.http.get(this.service_url+'users/profile',{headers:headers})
     .map(res=>res.json());  
  }
  registerUser(user){ 
    //console.log("userjlsjfls",user);
     let headers=new Headers();
     headers.append('content-type','application/json');
     return this.http.post(this.service_url+'/users/register',user,{headers:headers})
     .map(res=>res.json());
  }
  
  authenticateUser(user){
    //console.log("sdflkjdlksdjflksjdfljsd;lfjs;lfj;s",user);
      let headers=new Headers();
     headers.append('content-type','application/json');
     return this.http.post(this.service_url+'users/authenticate',user,{headers:headers})
     .map(res=>res.json());
  }
  storeUserData(token,user){
    
    //console.log("store user data funciton");
    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authtoken=token;
    this.user=user;
    //console.log("store user data funciton",localStorage.getItem('id_token'));
  }
  logout(){
    this.authtoken=null;
    this.user=null;
    localStorage.clear();
  }

  logged_in(){
    
    if(localStorage.getItem("id_token")){
      return true;
    }else {
      return false;
    }

  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authtoken=token; 

  }

}
