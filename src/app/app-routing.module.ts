import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';

// this is where we add our routes
const routes: Routes = [
  {path: 'users', component: UserListComponent},

  // route to create user
  {path: 'create-user', component: CreateUserComponent},

  // route to redirect from empty path to users
  {path: '', redirectTo: 'users', pathMatch: 'full'},

  // route to update user
  {path: 'update-user/:id', component:UpdateUserComponent},

  // route to delete user
  {path: 'delete-user/:id', component:DeleteUserComponent},

  // route for user details
  {path: 'user-details/:id', component:UserDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
