import { Component, OnInit } from '@angular/core';


import {GamesDataService } from '../games-data.service'


@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})

export class GamesListComponent implements OnInit {
title:string="MEAN Games APP";
message="";
// game1={
//   title:"MY First Game",
//   price:14.99,
//   year:2010
// }
// game2={
//   title:"MY Second Game",
//   price:14.99,
//   year:2010
// }
//games=[this.game1,this.game2]
games:Game[]=[];
//dependancy injection
  constructor(private gamesDataService:GamesDataService) { }

  // on the init 
  ngOnInit(): void {
    this.getGames();
    console.log(this.games);
    
  }
  public getGames():void{
    this.gamesDataService.getGames()
    .then(foundGames=>this.games=foundGames);
  }

}
export class Game{
  //! means no initial value
  _id!:number;
  title!:string;
  price!:number;
  year!:number;
  rate!:number;
  minPlayers!:number;
  maxPlayers!:number;
  minAge!:number;
  designers!:string;
}