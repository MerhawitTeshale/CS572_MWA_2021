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
  stars!:Number[];



  constructor(private gamesDataService:GamesDataService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("Inside init");
    const gameId:string=this.route.snapshot.params.gameId;
    this.getGame(gameId);
    console.log("Inside init this game"+this.game.title);
  }

  private getGame(gameId:string):void{
    this.gamesDataService.getGame(gameId).then(foundGame=>this.recievedGames(foundGame)).catch(this.handleError)
    console.log("Stars", this.game.rate);

  }

  private recievedGames(foundGame:Game){
    this.game=foundGame;
    console.log("Games", this.game);
    this.stars=new Array(this.game.rate);

  
  }
    private  handleError(error:any){

    }
  

}
