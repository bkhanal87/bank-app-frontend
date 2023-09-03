import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.userService.getUserById(this.id).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.log(error)
    );
  }
  onSubmit() {
    this.userService.deleteUser(this.id).subscribe
      (data => {
        console.log(data);
      },
      error => console.log(error));
  }
}
