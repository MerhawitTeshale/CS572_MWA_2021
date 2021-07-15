import { Inject, Injectable } from '@angular/core';

import {BROWSER_STORAGE, Storage} from './storage';
import { GamesDataService } from './games-data.service';

export class Credentials{
  username!:string;
  password!:string;
  name!:string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private gamesDataService:GamesDataService,@Inject(BROWSER_STORAGE) private storage:Storage) { }

  public saveToken(token:string){
   // this.storage.setItem("games-token",token);
   
  }
  public getToken():string{
   // return this.storage.getItem("games-token") as string;
   return "";
  }
  public login(credentials:Credentials):Promise<any>{
      return this.gamesDataService.login(credentials);
  }
  public logout():void{
   // this.storage.removeItem("games-token");
  }
  public isLoggedIn():boolean{
    const token:string=this.getToken();
    if(token){
      const payload=JSON.parse(atob(token.split(".")[1]));
      if(payload.exp>(Date.now()/1000)){
        return true;
      }else{
        this.logout();
        return false;
      }
    }else{
        return false;
    }
  }

  public getCurrentName():string{
    if (this.isLoggedIn()){
        const token:string=this.getToken();
        const name=JSON.parse(atob(token.split(".")[1]));
        return name;
    } 
    return {} as string;
  }
}
