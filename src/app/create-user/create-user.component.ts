import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit{

  // here, we need to create a user from a User class we'd create initially
  user: User = new User();

  constructor() {}

  ngOnInit(): void {
      
  }

  onSubmit() {
    console.log(this.user);
  }
}
