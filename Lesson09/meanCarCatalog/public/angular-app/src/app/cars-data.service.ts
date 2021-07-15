//system import
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
//aplication import
import{Car} from './car-list/car-list.component';


@Injectable({
  providedIn: 'root'
})
export class CarsDataService {

  private apiBaseUrl:string="http://localhost:3000/api";
  constructor(private http:HttpClient) { }

  public getCars():Promise<Car[]> {
    const url:string=this.apiBaseUrl+"/cars"; 
    return this.http.get(url).toPromise()
    .then(response=>response as Car[])
    .catch(this.handleError);
  }
  public getCar(carId:string):Promise<Car> {
    const url:string=this.apiBaseUrl+"/cars/"+carId;
    return this.http.get(url).toPromise()
    .then(response=>response as Car)
    .catch(this.handleError);
  }


  private handleError (err:any):Promise<any>{
    console.log(`sth is wrong`);
    return Promise.reject(err.message||err)
  }
}
