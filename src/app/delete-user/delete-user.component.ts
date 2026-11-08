import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css'],
})
export class DeleteUserComponent implements OnInit {
  id!: number;
  user: User = new User();

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.params['id']);

    this.userService.getUserById(this.id).subscribe({
      next: (data) => {
        this.user = data;;
      },
      error: (error) => console.error(error)
  });
  }

  onSubmit(): void {
    const confirmed = window.confirm(
      'Are you sure you want to delete this user?');
    if (!confirmed) {
      return;
    }

    this.userService.deleteUser(this.id).subscribe({
        next: (response) => {
          alert('User deleted successfully.');
          this.navigateToUserList();
        },
        error: (error) => {
          console.error('Delete failed:', error);
          alert('Unable to delete user. Please try again later.');
        }
      });
    }
    navigateToUserList(): void {
      this.router.navigate(['/users']);
    }
  }

