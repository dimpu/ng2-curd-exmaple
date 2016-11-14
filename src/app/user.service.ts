import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class UserService {
  private usersUrl = 'app/users';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(
   private http: Http
  ) { }


  // Get all users
  getUser(): Promise<any[]> {
    return this.http
      .get(this.usersUrl)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

   // Get user By Id
  getUserById(id: number): Promise<any> {
    return this.getUser()
             .then(users => users.find(user => user.id === id));
  }


  // Update User data
  updateUser(user): Promise<any> {
    const url = `${this.usersUrl}/${user.id}`;
    return this.http
      .put(url, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }
  
  // Create New User
  createUser(name: string, email: string, password: string): Promise<any> {
    return this.http
      .post(this.usersUrl, JSON.stringify({name: name, email: email, password: password}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }
  // delete User
  deleteUser(id: number): Promise<void> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
