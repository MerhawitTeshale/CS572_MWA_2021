import { Component, OnInit } from '@angular/core';

import { GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})




export class GamesListComponent implements OnInit {

  title: string="Mean Games";
  games:Game[]=[];

  constructor(private gamesService:GamesDataService) { }

  ngOnInit(): void {
    this.getGames();
    
  }

  public getGames():void{
    this.gamesService.getGames().then(foundGames=>this.games=foundGames)
  }




}
export class Game{
  _id!:string;
  title!:string;
  price!:number;
  year!:number;
  minPlayers!:number;
  maxPlayers!:number;
  minAge!:number;
  rate!:number;

}