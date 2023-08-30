import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit{

  // here, we need to create a user from a User class we'd created initially
  user: User = new User();

  constructor(private userService: UserService, private router: Router)
   {}

  ngOnInit(): void {
      
  }

  saveUser() {
    this.userService.createUser(this.user).subscribe(data => {
      console.log(data);
      this.navigateToUserList();
    },
    error => console.log(error));
    
  }

  navigateToUserList() {
    this.router.navigate(['/users']);
  }

  onSubmit() {
    console.log(this.user);
    this.saveUser();
  }
}
