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

  isSubmitting = false;

  constructor(private userService: UserService, private router: Router)
   {}

  ngOnInit(): void {
      
  }

  saveUser() {
    this.userService.createUser(this.user).subscribe({next: (data) => {
      this.isSubmitting = false;
      this.navigateToUserList();
    }, error: (error) => {
      this.isSubmitting = false;
      console.log(error);
    }});
  }

  navigateToUserList() {
    this.router.navigate(['/users']);
  }

  onSubmit() {
    if (this.isSubmitting) {
      return; // Prevent multiple submissions
    }
    this.isSubmitting = true;
    console.log(this.user);
    this.saveUser();
  }

 }
