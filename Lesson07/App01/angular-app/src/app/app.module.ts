import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';



import { WelcomeComponent } from './welcome/welcome.component';
import { GamesListComponent } from './games-list/games-list.component';
import { GamesDataService } from './games-data.service';
import { GamePageComponent } from './game-page/game-page.component';
import { OrderPipe } from './order.pipe';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    GamesListComponent,
    OrderPipe,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:"",
        component:WelcomeComponent
      },
      {
        path:"games",
        component:GamesListComponent
      },
      {
        path:"game/:gameId",
        component:GamePageComponent
      },
      {
        path:"**",
        component:GamesListComponent
      }
    ])
  ],
  providers: [
    GamesDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
