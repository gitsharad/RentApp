import { Injectable } from '@angular/core';
import {Http , Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService { 
  authtoken:any;
  user:any;

  constructor(private http:Http) { }
  getProfile(){
     this.loadToken();
     console.log("userjlsjfls",this.authtoken);
     let headers=new Headers();
     headers.append('Authorization',this.authtoken); 
     headers.append('content-type','application/json');
     return this.http.get('http://localhost:3000/users/profile',{headers:headers})
     .map(res=>res.json());
  }
  registerUser(user){ 
    //console.log("userjlsjfls",user);
     let headers=new Headers();
     headers.append('content-type','application/json');
     return this.http.post('http://localhost:3000/users/register',user,{headers:headers})
     .map(res=>res.json());
  }
  
  authenticateUser(user){
    //console.log("sdflkjdlksdjflksjdfljsd;lfjs;lfj;s",user);
      let headers=new Headers();
     headers.append('content-type','application/json');
     return this.http.post('http://localhost:3000/users/authenticate',user,{headers:headers})
     .map(res=>res.json());
  }
  storeUserData(token,user){
    //console.log("store user data funciton");
    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authtoken=token;
    this.user=user;
    console.log("store user data funciton",localStorage.getItem('id_token'));
  }
  logout(){
    this.authtoken=null;
    this.user=null;
    localStorage.clear();
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authtoken=token; 

  }

}
