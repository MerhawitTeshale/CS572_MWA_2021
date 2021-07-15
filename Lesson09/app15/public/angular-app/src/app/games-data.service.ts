import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

import {Game} from './games-list/games-list.component';

@Injectable({
  providedIn: 'root'
})
export class GamesDataService {

  constructor(private http:HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
        })
  };
  private apiBaseUrl:string="http://localhost:3000/api"
  public getGames():Promise<Game[]>{
    const url:string=this.apiBaseUrl+"/games";
    return this.http.get(url).toPromise() ///http.get(url) returns observable
    .then(response=>response as Game[]).catch(this.handleError); // then and catch are for converting the observable to promise
  }

  public getGame(gameId:string):Promise<Game>{
    const url:string=this.apiBaseUrl+"/games/"+gameId;
    return this.http.get(url).toPromise() ///http.get(url) returns observable
    .then(response=>response as Game).catch(this.handleError); // then and catch are for converting the observable to promise
  }

  public addNewGame(game:Game):Promise<Game[]>{
    const url:string=this.apiBaseUrl+"/games";
     return this.http.post<Game>(url, game,this.httpOptions).toPromise()
     .then(response=>response as Game).catch(this.handleError); 
  }

  private handleError(err:any):Promise<any>{
    console.log("Something went wrong", err);
    return Promise.reject(err.message||err)
    
  }
}
