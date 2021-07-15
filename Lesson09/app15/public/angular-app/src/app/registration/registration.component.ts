import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../authentication.service';
import { User } from '../users/users.component';
import { UsersDataService } from '../users-data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService, private userDataService:UsersDataService) { }

  ngOnInit(): void {
  }

  err!:string;
  message!:string;
  model:RegistrationModel={} as RegistrationModel;
  user:User={} as User;



  onSubmit() { 

    if(!this.model.username||!this.model.password||!this.model.repeatedPass||!this.model.name){
      this.err="please make sure you fill all the form";
  }
  else{
    if(this.model.password!=this.model.repeatedPass){
      this.err="please make sure the password match";
   }else{
      this.user.name=this.model.name;
      this.user.password=this.model.password;
      this.user.username=this.model.username;
      console.log("User", this.user);
      this.userDataService.register(this.user).then((response)=>{
        console.log("Response", response);
        this.message="Successfully Registered";
      }).catch(()=>{
        this.err="Error occured";
      });
   }
  }

     
  }
}

export class RegistrationModel{
  _id!:string;
  username!:string;
  name!:string;
  password!:string;
  repeatedPass!:string;
}