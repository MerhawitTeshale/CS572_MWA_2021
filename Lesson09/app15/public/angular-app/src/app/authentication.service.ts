import { Inject, Injectable } from '@angular/core';

import {BROWSER_STORAGE} from "./storage";
import { UsersDataService } from './users-data.service';
import { User } from './users/users.component';

export class Credentials {
  username!:string;
  password!:string;
  name!:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private userDataService:UsersDataService, @Inject(BROWSER_STORAGE) private storage:Storage) { }

  public saveToken(token:string){
    this.storage.setItem("games-token", token);
  }

  public getToken():string{
    return this.storage.getItem("games-token") as string;
  }

  public logout():void{
    console.log("Inside logout")
    this.storage.removeItem("games-token");
  }

  public isLogedIn():boolean{
    const token:string=this.getToken();
    // console.log("Token", token);
    if(token){
      const payload=JSON.parse(atob(token.split(".")[1]));
      if(payload.exp>(Date.now()/1000)){
        return true;
      }
      else{
        this.logout();
        return false;
      }
    }
    else{
      return false;
    }
  }

  public getCurrentName():string{

    if(this.isLogedIn()){
      const token:string=this.getToken();
      const {username}=JSON.parse(atob(token.split(".")[1]));
      console.log("Auth name", JSON.parse(atob(token.split(".")[1])));
      return username;
        }
    else{
      return "";
    }

  }

  public login(credentials:Credentials):Promise<any>{
    return this.userDataService.loginNew(credentials).then((response)=>{
      this.saveToken(response.token);
    });
  }
}
