//system import
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

//application import
import {Game} from "./games-list/games-list.component";

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
}
