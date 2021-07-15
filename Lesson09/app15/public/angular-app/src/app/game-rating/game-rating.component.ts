import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-rating',
  templateUrl: './game-rating.component.html',
  styleUrls: ['./game-rating.component.css']
})
export class GameRatingComponent implements OnInit {

  constructor() { }
  stars!:Number[];

  ngOnInit(): void {
  }

}
