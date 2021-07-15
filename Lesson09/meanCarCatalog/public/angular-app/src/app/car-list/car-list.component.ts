import { Component, OnInit } from '@angular/core';

import { CarsDataService } from '../cars-data.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars:Car[]=[];
  constructor(private carsDataService:CarsDataService) { }

  ngOnInit(): void {
    this.getCars();
    console.log(this.cars);
    
  }
  public getCars():void{
    this.carsDataService.getCars()
    .then(foundCars=>this.cars=foundCars);
  }
}

export class Car{
  _id!:number;
  name!:string;
  model!:string;
  year!:String;
  // engine!:{
  //   type!:string
  // };
  
}