import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Game } from '../games-list/games-list.component';
import { GamesDataService } from '../games-data.service';
@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  game:Game={} as Game
  stars:any={};
  constructor(private gamesDataService:GamesDataService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("Inside init");
    const gameId:string=this.route.snapshot.params.gameId;
    this.getGame(gameId);
    console.log("Inside init this game"+this.game.title);
  }

  private getGame(gameId:string):void{
    this.gamesDataService.getGame(gameId).then(foundGame=>this.recievedGames(foundGame)).catch(this.handleError)
  
  }

  private recievedGames(foundGame:Game){
    this.game=foundGame;
    this.stars=this._getStarsArray(foundGame.rate);
  
  }
    private  handleError(error:any){
      console.log(`error occured ${error}`); 
    }
  
    private _getStarsArray(rating:number){
      return new Array(rating);
  }
}
