import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export class User{
  _id!:string;
  username!:string;
  password!:string;
  name!:string;

}
