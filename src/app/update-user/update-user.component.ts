import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {

  id!: number;
  user: User = new User();

  // we need to inject an activatedRoute to update user
  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) {}

  //the snapshot and params values come from the ActivatedRoute
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.userService.getUserById(this.id).subscribe(data => {
      this.user = data;
    }, error => console.log(error))
  }

  onSubmit() {
    this.userService.updateUser(this.id, this.user).subscribe(data => {
      this.navigateToUserList();
    }, error => console.log(error));
  }

  navigateToUserList() {
    this.router.navigate(['/users']);
  }
}
