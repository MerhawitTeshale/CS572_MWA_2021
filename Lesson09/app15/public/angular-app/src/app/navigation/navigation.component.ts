import { Component, OnInit } from '@angular/core';

import { User } from '../users/users.component';
import { UsersDataService } from '../users-data.service';
import { Credentials } from '../authentication.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private userDataService:UsersDataService, private authenticationService:AuthenticationService) { }

  ngOnInit(): void {
  }
  // model:User={} as User
  model:Credentials={} as Credentials;
  name!:string;



  onSubmit() { 
    console.log(this.model);
    console.log(this.model.username);
    // this.userDataService.login(this.model).then((user)=>console.log("Succsessfully Logged in.", user));
    // this.userDataService.loginNew(this.model).then((response)=>console.log("Successfully Logged IN", response));
    this.authenticationService.login(this.model).then((response)=>{
      console.log("Auth Service Login", response);
      this.setName(); 
    });
     
  }

  isLogedIn():boolean{
    return this.authenticationService.isLogedIn();
  }

  logout():void{
    console.log("Logout from nav");
    return this.authenticationService.logout();
  }

  setName():string{
    console.log("this.authenticationService.getCurrentName()", this.authenticationService.getCurrentName());
    this.name=this.authenticationService.getCurrentName();
    return this.authenticationService.getCurrentName();
  }

}
