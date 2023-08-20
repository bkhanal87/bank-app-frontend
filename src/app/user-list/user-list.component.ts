import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

  users!: User[];

  constructor() {

  }

  ngOnInit(): void {
    this.users = [
      {
        id: 1,
        name: 'Pete',
        address: '123 Main Street',
        phoneNumber: '000-000-0000',
      },
      {
        id: 2,
        name: 'Tom',
        address: '789 Anystreet Dr',
        phoneNumber: '000-000-0000',
      },
      {
        id: 3,
        name: 'Mike',
        address: '824 Hamilton Ave',
        phoneNumber: '000-000-0000',
      },
      {
        id: 4,
        name: 'John',
        address: '567 Mason Ave',
        phoneNumber: '000-000-0000',
      },
    ];
  }
}
