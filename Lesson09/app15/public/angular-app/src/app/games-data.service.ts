//system import
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

//application import
import {Game} from "./games-list/games-list.component";
import { Credentials } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class GamesDataService {

  private apiBaseUrl:string="http://localhost:3000/api";
//it like us declaring a private variable
  constructor(private http:HttpClient) { }

  public getGames(): Promise<Game[]>{
    const url:string=this.apiBaseUrl+"/games";
    return this.http.get(url).toPromise()
    //this is casting response=> response as Game[]
          .then(response=> response as Game[])
          .catch(this.handleError);
  }
  public getGame(gameId:string): Promise<Game>{
    const url:string=this.apiBaseUrl+"/games/"+gameId;
    return this.http.get(url).toPromise()
    //this is casting response=> response as Game[]
          .then(response=> response as Game)
          .catch(this.handleError);
  }
  private handleError (error:any):Promise<any>{
    console.log(`sth went wrong ${error}`);
    return Promise.reject(error.message||error);
    
  }


  ////user servcoe
  //Promise<unkonwn> should be the return type
  public login(credentials:Credentials):any{
    //1- build the url
    const url:string=this.apiBaseUrl+"users/login";
    //2- tell http to make a request 
    //3- convert the observable to promise
    this.http.post(url,credentials).toPromise()
    .then(this.loginDone).catch(this.handleLoginError);
  }

  private loginDone(response:unknown):unknown{
    console.log(`login Done`);
    return response;
    
  }
  private handleLoginError(err:unknown):unknown{
    console.log(`error login`);
    return {};
    
  }
}
