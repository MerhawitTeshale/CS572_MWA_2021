import { Component, OnInit } from '@angular/core';

import {Game} from '../games-list/games-list.component';
import { GamesDataService } from '../games-data.service';


@Component({
  selector: 'app-game-add',
  templateUrl: './game-add.component.html',
  styleUrls: ['./game-add.component.css']
})
export class GameAddComponent implements OnInit {

  constructor(private gamesDataService:GamesDataService) { }

  ngOnInit(): void {
  }

  model:Game={} as Game

  submitted = false;

  onSubmit() { 
    console.log(this.model);
    console.log("This title", this.model.title);
    this.submitted = true; 
    this.gamesDataService.addNewGame(this.model).then((game)=>console.log("Succsessfilly Added", game));

  }

}
