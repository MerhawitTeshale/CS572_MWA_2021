import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GamesListComponent } from './games-list/games-list.component';
import { GamesDataService } from './games-data.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { OrderPipe } from './order.pipe';
import { GameAddComponent } from './game-add/game-add.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UsersComponent } from './users/users.component';
import { GameRatingComponent } from './game-rating/game-rating.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    GamesListComponent,
    ErrorPageComponent,
    GamePageComponent,
    OrderPipe,
    GameAddComponent,
    NavigationComponent,
    UsersComponent,
    GameRatingComponent,
    RegistrationComponent,
    ProfileComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:"",
        component:WelcomeComponent
      },{
        path:"games",
        component:GamesListComponent
      },{
        path:"game/:gameId",
        component:GamePageComponent
      },{
        path:"profile",
        component:ProfileComponent
      },{
        path:"register",
        component:RegistrationComponent
      }
      ,{
        path:"**",
        component:ErrorPageComponent
      }

    ])
  ],
  providers: [
    GamesListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
