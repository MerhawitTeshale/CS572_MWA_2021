import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CarPageComponent } from './car-page/car-page.component';
import { CarsDataService } from './cars-data.service';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    WelcomeComponent,
    CarPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'',
        component:WelcomeComponent
      },
      {
        path:'cars',
        component:CarListComponent
      },
      {
        path:'cars/:carId',
        component:CarPageComponent
      },
      {
        path:'**',
        component:CarListComponent
      }
    ])
  ],
  providers: [
    CarsDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
