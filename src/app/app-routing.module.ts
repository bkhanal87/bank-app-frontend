import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

// this is where we add our routes
const routes: Routes = [
  {path: 'users', component: UserListComponent},

  // route to redirect from empty path to users
  {path: '', redirectTo: 'users', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
