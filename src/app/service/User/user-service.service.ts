import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface User{
  id?:number;
  name:string;
  email:string;
}
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl='http://localhost:1000/user';

  constructor(private http:HttpClient) { }

  addUser(user:User):Observable<User>{
    return this.http.post<User>(`${this.baseUrl}/user`,user)
  }

  getUserById(id:number):Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/user/${id}`)
  }

  getAll():Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/user`)
  }

  updateUser(id:number,user:User):Observable<User>{
    return this.http.put<User>(`${this.baseUrl}/user/${id}`,user);
  }
}
