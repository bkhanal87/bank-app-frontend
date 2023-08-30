import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8080/users";

  constructor(private httpClient: HttpClient) { }

  // get method to get user from db
  getUserList(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseUrl}`);
  }

  // post method to add user in the db
  createUser(user:User): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, user);
  }

  // put method to update user by id
  updateUser(id: number, user:User): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, user);
  }
  // get method to get user by id
  getUserById(id: number) : Observable<User>{
    return this.httpClient.get<User>(`${this.baseUrl}/${id}`);
  }
  // delete method to deleter user
  deleteUser(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
