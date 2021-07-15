import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Car } from '../car-list/car-list.component';
import { CarsDataService } from '../cars-data.service';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent implements OnInit {
car:Car={} as Car
  constructor(private carsDataService:CarsDataService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(`inside the init of car detaile`);
    const carId:string=this.route.snapshot.params.carId;
    this.getCar(carId);
  }

  private getCar(carId:string):void{
    this.carsDataService.getCar(carId).then(foundCar=>this.recievedCar(foundCar))
    .catch(this.handleError);
  }

  private recievedCar(foundCar:Car){
    this.car=foundCar;
  }
  private handleError(err:any){
    console.log(`error occured`);
  }
}
