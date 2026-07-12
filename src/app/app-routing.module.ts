import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HomeComponent } from './home/home.component';
import { AccountsComponent } from './accounts/accounts.component';
import { TransfersComponent } from './transfers/transfers.component';
import { TransactionsComponent } from './transactions/transactions.component';

// this is where we add our routes
const routes: Routes = [

  // Home page
  { path: '', component: HomeComponent },

  // Banking pages
  { path: 'accounts', component: AccountsComponent },
  { path: 'transfers', component: TransfersComponent },
  { path: 'transactions', component: TransactionsComponent },

  // Admin pages (your existing CRUD)
  { path: 'users', component: UserListComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'update-user/:id', component: UpdateUserComponent },
  { path: 'delete-user/:id', component: DeleteUserComponent },
  { path: 'user-details/:id', component: UserDetailsComponent },

  // Catch-all
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }