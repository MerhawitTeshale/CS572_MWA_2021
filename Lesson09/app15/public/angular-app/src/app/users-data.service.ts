import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

import { User } from './users/users.component';
import { Credentials } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private http:HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
        })
  };
  
  private apiBaseUrl:string="http://localhost:3000/api";

  public login(user:User):Promise<User[]>{
    const url:string=this.apiBaseUrl+"/users/login";
     return this.http.post<User>(url,user, this.httpOptions).toPromise()
     .then(response=>response as User).catch(this.handleError); 
  }

  private handleError(err:any):Promise<any>{
    console.log("Something went wrong", err);
    return Promise.reject(err.message||err)
    
  }

  public loginNew(credential:Credentials):Promise<any>{
    //1.Build url
    const url:string=this.apiBaseUrl+"/users/login";
    // 2. tell http to make a request
    //3. convert the obsevable to a promise
    //return the response and catch error
     return this.http.post(url,credential, this.httpOptions).toPromise()
     .then(this.loginDone)
     .catch(this.handleError); 
  }

  private loginDone(response:unknown):unknown{
    console.log("login done");
    return response
  }

  public register(user:User):Promise<any>{
    const url:string=this.apiBaseUrl+"/users/register";
    return this.http.post(url,user).toPromise()
    .then((response)=>{
      console.log("Registered", response)
    })
    .catch(this.handleError); 

  }
}
