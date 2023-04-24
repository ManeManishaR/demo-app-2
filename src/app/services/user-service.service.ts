import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService  {

  url = 'https://jsonplaceholder.typicode.com/users';
  splice: any;

  
    constructor(private http: HttpClient) {}
  
    //list of all user
    list():Observable<Users []> {
      return this.http.get<Users[]>(this.url);
    }
  
    //view single user by id
    viewUser(id: string) {
      return this.http.get(this.url + '/' + id);
    }

    //create user
    addUser(userObj: any){
      return this.http.post(this.url, userObj);
    }

    //delete user
    deleteUser(id:any){
      return this.http.delete(this.url + '/' + id)
    }

    //update user
    updateUser(id: any, userObj:any) {
      return this.http.put(`${this.url}/${id}`, userObj);
    }



  }

